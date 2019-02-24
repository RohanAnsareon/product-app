import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Array<Product>;

  private hubConnection: signalR.HubConnection;

  public get products(): Array<Product> {
    return this._products;
  }


  public set products(v: Product[]) {
    this._products = v;
  }


  addProduct(product: Product) {
    product.id = 0;
    this.http.post('http://localhost:5000/api/products', product, { observe: 'response' }).subscribe((resp) => {
      resp.ok ? console.log('SuccessPostRequest') : console.log(resp.body);
    });
  }

  removeProduct(id: number) {
    this.http.delete(`http://localhost:5000/api/products/${id}`, { observe: 'response' }).subscribe((resp) => {
      resp.ok ? console.log('SeccessDeleteRequest') : console.log(resp.body);
    });
  }

  editProduct(product: Product) {
    this.http.put(`http://localhost:5000/api/products/${product.id}`, product, {observe: 'response'}).subscribe((resp) => {
      resp.ok ? console.log('SeccessPutRequest') : console.log(resp.body);
    });
  }

  getProducts() {
    this.http.get('http://localhost:5000/api/products').subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  constructor(private http: HttpClient) {
    this.getProducts();

    this.hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:5000/producthub').build();
    this.hubConnection
    .start()
    .then(() => {
      console.log('Connection started');
    })
    .catch(err => {
      console.log(err);
    });

    this.hubConnection.on('AddProduct', (prod: Product) => {
      this.products.push(prod);
    });

    this.hubConnection.on('EditProduct', (id: number, prod: Product) => {
      const product = this.products.find(p => p.id === id);
      product.name = prod.name;
      product.cost = prod.cost;
      product.category = prod.category;
      product.available = prod.available;
      product.count = prod.count;
      product.removeDate = prod.removeDate;
    });

    this.hubConnection.on('RemoveProduct', (id: number) => {
      this.products.splice(this.products.findIndex(p => p.id === id), 1);
    });
  }
}
