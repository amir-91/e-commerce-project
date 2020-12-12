import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  totalPrice:number =0
  cartCounter : number = 0
  
  products : any[] =[]
  productId : number = 0
  

  constructor(private productService: ProductService, //here we link between service and component
              private router: Router) { } 

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods) => {
       
    this.products.push(prods);
   console.log(this.products);

   
  
    });
  }

  


addToCart(itemPrice:number) {
   this.cartCounter = this.cartCounter + 1
   this.totalPrice = this.totalPrice + Number(itemPrice)
   console.log(this.cartCounter)
   console.log(itemPrice)
   console.log(this.totalPrice)
   
}

headerPrice :number = this.totalPrice
headerCart : number = this.cartCounter

getProductById (id:number) {
  this.productId = id
  
  console.log(this.productId)
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

  product () {
    this.router.navigate(['product']).then();
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
