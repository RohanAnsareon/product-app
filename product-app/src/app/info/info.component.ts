import { BasketService } from './../services/basket.service';
import { InfoModComponent } from './info-mod/info-mod.component';
import { ProductService } from './../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Product } from '../models/product';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  product: Product;

  constructor(private router: Router,
              public dialog: MatDialog,
              public productService: ProductService,
              private route: ActivatedRoute,
              private basketService: BasketService
              ) {
    const id_ = +this.route.snapshot.params.id;
    this.product = this.productService.products.find(p => p.id === id_);
    const dialogRef = this.dialog.open(InfoModComponent, {
      data: {
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === false || result === undefined) {
        console.log('cancel');
      } else if (result === true) {
        this.basketService.addProduct(this.product);
      }
      this.router.navigate(['/products']);
    });
  }
}
