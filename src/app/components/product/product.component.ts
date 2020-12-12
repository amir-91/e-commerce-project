import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
