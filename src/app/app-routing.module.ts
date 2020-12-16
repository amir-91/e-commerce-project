import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import {ProfileComponent} from './components/profile/profile.component'
import {HeaderComponent} from './components/header/header.component'


const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  
  {
    path:'cart' , component:CartComponent
  },
  {
    path:'checkout' , component:CheckoutComponent
  },
  {
    path:'singleProduct' , component:SingleProductComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'signup' , component:SignupComponent
  },
  {
    path: 'profile' , component: ProfileComponent
  },
  {
    path: 'header' , component: HeaderComponent
  },
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
