import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {CookieService} from 'ngx-cookie-service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  totalPrice:number =0
  cartCounter : number = 0
  idFromCookies:any
 
  
  products : any[] =[]

  //to store detail of each product to transfer from home to single product
  productId : number = 0
  productTitle:string = ""
  productImage:string=""
  productPrice:string=""
  productQuantity:number=1
  productsTotalPrice:number=0
  productDetails:any 
 
    
  

  constructor(private productService: ProductService, //here we link between service and component
              private router: Router,
              private CookieService:CookieService) { } 

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods) => {
       
    this.products.push(prods);
   console.log(this.products);

   
  
    });
  }

  


addToCart(itemPrice:number,id:number) {
   
   if(this.CookieService.get('productCart')=="") {

  }else{
   this.idFromCookies=JSON.parse(this.CookieService.get('productCart'))
   console.log(this.idFromCookies)
   for(let cookie of this.idFromCookies )
   if (id==cookie.id) {
     alert('chosen before')
     this.router.navigate(['cart'])
     
   }
  }
  this.cartCounter = this.cartCounter + 1
   this.totalPrice = this.totalPrice + Number(itemPrice)
   
   console.log(this.cartCounter)
   console.log(itemPrice)
   console.log(this.totalPrice)
   
}

headerPrice :number = this.totalPrice
headerCart : number = this.cartCounter

getProductById (id:number,title: string, price:string, image:string) {
  this.productId = id
  this.productTitle= title
  this.productImage= image
  this.productPrice= price
  this.productQuantity= 0
  this.productsTotalPrice=0

  this.productDetails = {
    id,title,image,price,quantity:0,totalPrice:0
  }

  console.log(this.productDetails)
}

sendValueIntoService(value: any) {
  this.productService.setProductDetails(value);
}


  home () {
    this.router.navigate(['']).then();
  }

  singleProduct () {
    //to send productDetails object to service
    this.sendValueIntoService(this.productDetails) 
    this.router.navigate(['singleProduct']).then();

  }

  goToCart () {
    this.router.navigate(['cart']).then();
    this.sendValueIntoService(this.productDetails) 
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
