import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TopBarComponent} from './components/page/top-bar/top-bar.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductAlertsComponent} from './components/product/product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './components/product/product-details/product-details.component';
import {CartComponent} from './components/checkout/cart/cart.component';
import {ShippingComponent} from './components/checkout/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/shop'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
