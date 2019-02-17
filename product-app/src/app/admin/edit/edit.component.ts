import { EditModComponent } from './edit-mod/edit-mod.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;

  constructor(public productService: ProductService, public route: ActivatedRoute, public dialog: MatDialog, public router: Router) {
    const id_ = +this.route.snapshot.params.id;
    this.product = this.productService.products.find(p => p.id === id_);
    const dialogRef = this.dialog.open(EditModComponent, {
      data: {
        product: this.product
      }
    });

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
