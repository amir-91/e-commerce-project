import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SignupComponent } from './components/signup/signup.component';
import { SingleProductComponent } from './components/single-product/single-product.component';


const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path:'product' , component:ProductComponent
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
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
