import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  cookiesData:any
  cartQuantity:any
  cartData:number[]=[]
  cartArray:any
  arraySum:number=0
  totalPrice:number=0
  
 


  constructor(private router:Router,
              private CookieService: CookieService) { }

  ngOnInit(): void {

    this.cookiesData=JSON.parse(this.CookieService.get('productCart'))
    console.log(this.cookiesData)
    for(let cookie of this.cookiesData){
      this.cartData.push(cookie.quantity) 
     console.log(this.cartData)
    
     
     this.CookieService.set('productCart',JSON.stringify(this.cookiesData))
    }
    for (let i=0; i < this.cartData.length; i++){
      this.arraySum = this.arraySum*1 + this.cartData[i]*1
      this.totalPrice = this.cookiesData[i].totalPrice*1 + this.totalPrice
    }
    console.log(this.arraySum)
  }

  quantityChanged(){
    return this.cartData
  }

  goToCart () {
    this.router.navigate(['cart']).then();
  }
  checkOut () {
    this.router.navigate(['checkout']).then();
  }

  login () {
    this.router.navigate(['login']).then();
  }

  profile() {
    this.router.navigate(['profile']).then();
  }
}
