import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ChackoutComponent } from './components/chackout/chackout.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path:"shop", component:ShopComponent},
  {path:"shop-details", component:ShopDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"chackout", component:ChackoutComponent},
  {path:"testimonial", component:TestimonialComponent},
  {path:"not-found", component:NotFoundComponent},
  {path:"contact", component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
