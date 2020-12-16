import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

totalprice:any
token:any
quantity:number=0
cartData:any
totalPrice: number=0;
  
  constructor(private router:Router,
              private CookieService: CookieService) { }

            

  ngOnInit(): void {
    this.Islogged()
    this.cartData=JSON.parse(this.CookieService.get('productCart'))
   
    for (let i=0; i < this.cartData.length; i++){
      this.quantity = this.quantity*1 + this.cartData[i].quantity *1
      this.totalPrice = this.cartData[i].totalPrice*1 + this.totalPrice
      
    }
    console.log(this.cartData)
    console.log(this.quantity)
  }

  Islogged () {
    this.token=this.CookieService.get('token')
    if (this.token) {

    } else {
      alert('please login first')
      this.router.navigate(["/login"])
    }

  }

  placeOrder (){
    return alert('your order is successfully sent')
  }
  

  home () {
    this.router.navigate(['']).then();
  }

  singleProduct () {
    this.router.navigate(['singleProduct']).then();
  }

  goToCart () {
    this.router.navigate(['cart']).then();
  }


  checkOut () {
    this.router.navigate(['checkout']).then();
  }

  signup () {
    this.router.navigate(['signup']).then();
  }
  
  login () {
    this.router.navigate(['login']).then();
  }
}
