import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditComponent } from './edit/edit.component';
import { NewProductComponent } from './new-product/new-product.component';

const adminRoutes: Routes = [
  { path: 'admin', component: ProductsComponent, children: [
      { path: 'edit/:id', component: EditComponent },
      { path: 'new', component: NewProductComponent }
    ]
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
