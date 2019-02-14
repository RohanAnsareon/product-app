import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';
import { BasketComponent } from './basket/basket.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatDialogModule, MatGridListModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { InfoModComponent } from './info/info-mod/info-mod.component';
import { BasketModComponent } from './basket/basket-mod/basket-mod.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InfoComponent,
    BasketComponent,
    PageNotFoundComponent,
    InfoModComponent,
    BasketModComponent,
  ],
  imports: [
    AppRoutingModule,
    // material modules
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,

    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InfoModComponent,
    BasketModComponent
  ]
})
export class AppModule { }
