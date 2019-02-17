import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule,
   MatListModule,
   MatExpansionModule,
   MatIconModule,
   MatButtonModule,
   MatDialogModule,
   MatCheckboxModule,
   MatFormFieldModule,
   MatInputModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditModComponent } from './edit/edit-mod/edit-mod.component';
import { NewProductModComponent } from './new-product/new-product-mod/new-product-mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, EditComponent, NewProductComponent, EditModComponent, NewProductModComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [ProductsComponent],
  entryComponents: [
    EditModComponent,
    NewProductModComponent
  ]
})
export class AdminModule { }
