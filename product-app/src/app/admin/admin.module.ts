import { MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule
  ],
  bootstrap: [ProductsComponent]
})
export class AdminModule { }
