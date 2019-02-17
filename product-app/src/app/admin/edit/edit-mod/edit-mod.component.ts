import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-mod',
  templateUrl: './edit-mod.component.html',
  styleUrls: ['./edit-mod.component.css']
})
export class EditModComponent {

  model: Product;

  onSubmit() {
    this.productService.editProduct(this.model);
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data, public productService: ProductService) {
    const temp = data.product;
    this.model = new Product(temp.id, temp.name, temp.cost, temp.category, temp.available, temp.count, temp.removeDate);
   }
}
