import { MatGridListModule, MatListModule, MatExpansionModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [ProductsComponent, EditComponent, NewProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  bootstrap: [ProductsComponent]
})
export class AdminModule { }
