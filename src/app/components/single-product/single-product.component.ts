import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input()
  productId!: number;
   btnDisable: boolean = false
  products : any[] =[]
  dataOfProduct : any 

  constructor(private productService:ProductService,
     private router:Router,

    ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods) => {
      this.products.push(prods);
     console.log(this.products);
    

    
      });


      this.dataOfProduct=this.productService.getProductDetails()
      if(this.dataOfProduct==null) {
        this.dataOfProduct={title:'no data',price:'no data',id:0}
        this.btnDisable=true

      }
      console.log(this.dataOfProduct)
  }
  
  
  totalPrice:number =0
  cartCounter : number = 0

  isInvalid () {
   return  this.btnDisable
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

  addToCart(itemPrice:number) {
    this.cartCounter = this.cartCounter + 1
    this.totalPrice = this.totalPrice + Number(itemPrice)
    console.log(this.cartCounter)
    console.log(itemPrice)
    console.log(this.totalPrice)
    
 }
}
