import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasketComponent } from './basket/basket.component';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent,
    children: [
      { path: 'basket', component: BasketComponent},
      { path: ':id', component: InfoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
