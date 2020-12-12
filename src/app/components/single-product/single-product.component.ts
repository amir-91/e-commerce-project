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

  products : any[] =[]

  

  constructor(private productService:ProductService,
     private router:Router
    ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods) => {
       
      this.products.push(prods);
     console.log(this.products);

    
    
      });
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
}
