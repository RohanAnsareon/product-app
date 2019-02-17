import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-new-product-mod',
  templateUrl: './new-product-mod.component.html',
  styleUrls: ['./new-product-mod.component.css']
})
export class NewProductModComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  cost = new FormControl('', [Validators.required, Validators.min(0)]);
  category = new FormControl('', [Validators.required, Validators.minLength(4)]);
  available = new FormControl('', [Validators.required, Validators.minLength(4)]);
  count = new FormControl('', [Validators.required, Validators.min(0)]);
  removedate = new FormControl('', [Validators.required, Validators.minLength(4)]);

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' :
        this.name.hasError('minlength') ? 'More than 4 symbols' :
            '';
  }

  getCostErrorMessage() {
    return this.cost.hasError('required') ? 'You must enter a cost' :
        this.cost.hasError('min') ? 'Value must be more than 0' :
            '';
  }

  getCategoryErrorMessage() {
    return this.category.hasError('required') ? 'You must enter a category' :
        this.category.hasError('minlength') ? 'Name must be more than 4 symbols' :
            '';
  }

  getAvailableErrorMessage() {
    return this.available.hasError('required') ? 'Availablity error' : '';
  }

  getCountErrorMessage() {
    return this.count.hasError('required') ? 'You must enter count' :
        this.count.hasError('min') ? 'Value must be more than 0' :
            '';
  }

  getRemoveDateErrorMessage() {
    return this.available.hasError('required') ? 'You must enter a remove date' : '';
  }

  onSubmit() {
    if (this.name.invalid || this.cost.invalid || this.category.invalid
                        || this.count.invalid || this.removedate.invalid) {
                          alert('Check input for errors');
                          console.log(this.removedate.value);
    } else {
      this.productService.addProduct(new Product(null, this.name.value, this.cost.value,
                                    this.category.value, true, this.count.value, this.removedate.value));
    }
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
