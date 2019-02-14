import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private _basket: Array<Product> = new Array<Product>();
  public get basket(): Array<Product> {
    return this._basket;
  }

  addProduct(product: Product) {
    const newProduct = new Product(product.id,
                                    product.name,
                                    product.cost,
                                    product.category,
                                    product.avaliable,
                                    product.count,
                                    product.removeDate);
    if (this._basket.length === 0) {
        newProduct.id = 1;
    } else {
      newProduct.id = this._basket[this._basket.length - 1].id + 1;
    }
    this._basket.push(newProduct);
  }

  removeProduct(id: number) {
    this._basket.splice(this._basket.findIndex((product) => product.id === id), 1);
  }

  constructor() { }
}
