import { Product } from './../models/product';
import { InfoComponent } from './../info/info.component';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

}
