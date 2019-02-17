import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  clickedProduct: Product = null;

  private _products: Array<Product> = new Array<Product>();
  public get products(): Array<Product> {
    return this._products;
  }

  addProduct(product: Product) {
    product.id = this._products[this._products.length - 1].id + 1;
    this._products.push(product);

  }

  removeProduct(id: number) {
    this._products.splice(this._products.findIndex((product) => product.id === id), 1);
  }

  editProduct(product: Product) {
    const index = this._products.findIndex((p) => p.id === product.id);
    this._products[index].name = product.name;
    this._products[index].cost = product.cost;
    this._products[index].category = product.category;
    this._products[index].available = product.available;
    this._products[index].count = product.count;
    this._products[index].removeDate = product.removeDate;
  }

  constructor(private http: HttpClient) { }
}
