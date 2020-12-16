import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {CookieService} from 'ngx-cookie-service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartDetails:any
  allProducts:any[]=[]
  cookiesData:any
  totalPrice:number=0
  found:boolean=false

   
  
 
  
  constructor(private router:Router,
              private cartData:ProductService,
              private CookieService:CookieService) { }

  ngOnInit(): void {

    
    this.cartDetails = this.cartData.getProductDetails()
    console.log(this.cartDetails)
    if(this.CookieService.get('productCart')=="") {

    }else {
         this.cookiesData=JSON.parse(this.CookieService.get('productCart'))
    for(let cookie of this.cookiesData) {
      this.allProducts.push(cookie)
      console.log(this.cookiesData)
    } 
    for (let i=0; i < this.cookiesData.length; i++){
     
      this.totalPrice = this.cookiesData[i].totalPrice*1 + this.totalPrice
    }
   }
   debugger;
    if (this.cartDetails==null) {
    
      
    } else {

      for(let product of this.allProducts) {
        if(product.id == this.cartDetails.id) {
         this.found=true;break
        } else {
          this.found=false      
        }
        
      }
      if(this.found==false) {

        this.allProducts.push(this.cartDetails)
        console.log(this.allProducts) 
        
         this.CookieService.set('productCart',JSON.stringify(this.allProducts))
      }
      
    
    }
   
  
  }

  quantityChanged(n:any=0, id:number) {
    console.log(id)
    console.log(n)
 
    for(let productById of this.allProducts){
       if (productById.id == id) {
         productById.quantity = n
         productById.totalPrice = productById.price * productById.quantity
         this.totalPrice += productById.price *1
         console.log(productById)
         this.CookieService.set('productCart',JSON.stringify(this.allProducts))
         
       }
    }
    console.log(this.allProducts)
  window.location.reload()
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
