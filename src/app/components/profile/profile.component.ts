import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData:any 

  constructor(private router:Router,
              private profileData: ProductService) { 

                this.formData = this.profileData.getSignUp()
                console.log(this.formData)
              }

  ngOnInit(): void {
  }

 
  
  profile () {
    this.router.navigate(['profile']).then();
  }

  
 
  
}
