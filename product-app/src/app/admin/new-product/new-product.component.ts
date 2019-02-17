import { NewProductModComponent } from './new-product-mod/new-product-mod.component';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(public productService: ProductService, public dialog: MatDialog, public router: Router) {
    const dialogRef = this.dialog.open(NewProductModComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== true) {
        console.log('cancel');
      } else if (result === true) {
        console.log('true');
      }
      this.router.navigate(['/admin']);
    });
  }

  ngOnInit() {
  }

}
