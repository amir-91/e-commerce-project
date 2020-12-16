import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addFbuilder
  submitted= false
  formValues: any
  users:any [] =[]
  token:any
  

 

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productService: ProductService,
              private router:Router,
              private CookieService: CookieService) { 


  this.addFbuilder = this.fb.group({
    email: ['',[Validators.email]],
    
    password: ['', [Validators.required, Validators.minLength(6)]],
  
  }, 
  )
  } 

  ngOnInit(): void {
  }


  sendValueIntoService(value: any) {
    this.productService.setdata2(value);
}


  onFormSubmit(){
    console.log(this.addFbuilder.value)
    this.formValues = this.addFbuilder.value

    this.submitted = true
    if (this.addFbuilder.invalid) {
    
    } 
    if (!this.addFbuilder.invalid) {
      this.sendValueIntoService(this.formValues) 
      this.productService.loginUser().subscribe((users: any) => {
       
       this.users.push(users);
       console.log(this.users);
  
      const backResponse = users 
      console.log(backResponse)
      
      if (backResponse.status==0) {
        alert('invalid email or password .. try again')
      } else {
      
      this.CookieService.set('token',JSON.stringify(backResponse.token))
      this.router.navigate([""])
      }
      });
    } 
  
}



  
   
  get f() { return this.addFbuilder.controls; }

  
}

