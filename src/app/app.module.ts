import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { Page404Component } from './page/page404.component';
import { NavbarComponent } from './page/home/navbar.component';
import { FooterComponent } from './page/home/footer.component';
import { HeroComponent } from './page/home/hero/hero.component';
import { ShoppingCartComponent } from './page/home/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './page/home/product-list.component';
import { ProductDetailsComponent } from './page/home/product-details/product-details.component';
import { SearchProductComponent } from './page/home/search-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    SearchProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
