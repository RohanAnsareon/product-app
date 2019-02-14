import { Injectable } from '@angular/core';
import { Product } from '../models/product';

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
    this._products[index].avaliable = product.avaliable;
    this._products[index].count = product.count;
    this._products[index].removeDate = product.removeDate;
  }

  constructor() {
    this._products.push(new Product(1, 'Apple',   1.5, 'Fruit', true, 150, new Date()));
    this._products.push(new Product(2, 'Banana',  8, 'Fruit', true, 80, new Date()));
    this._products.push(new Product(3, 'Limon',   3, 'Fruit', true, 85, new Date()));
    this._products.push(new Product(4, 'Orange',  6, 'Fruit', true, 60, new Date()));
    this._products.push(new Product(5, 'Macbook', 1200, 'Tech', false, 12, new Date()));
    this._products.push(new Product(6, 'Bonaqua', 4, 'Water', true, 90, new Date()));
  }
}
