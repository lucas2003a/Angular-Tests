import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ChackoutComponent } from './components/chackout/chackout.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    HomeComponent,
    ShopDetailsComponent,
    CartComponent,
    ChackoutComponent,
    TestimonialComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
