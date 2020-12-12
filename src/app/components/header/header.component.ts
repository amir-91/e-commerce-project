import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  @Input()
  totalPrice!: number;
  @Input()
  cartCounter!: number;

  


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCart () {
    this.router.navigate(['cart']).then();
  }
  checkOut () {
    this.router.navigate(['checkout']).then();
  }
}
