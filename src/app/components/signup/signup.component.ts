import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import {MustMatch} from 'src/app/_helpers/must-match.validator'
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-builder-add',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupData : any 
  
  formValues:any [] = []
  addFbuilder
  submitted= false
  users:any [] =[]

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productService:ProductService,
              private router:Router) { 

               
  this.addFbuilder = this.fb.group({
    name:[,[Validators.required, Validators.minLength(6)]],
    email: ['',[Validators.email]],
    phone:['',[Validators.minLength(11),Validators.maxLength(11)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  
  }, {
    validator:MustMatch('password','confirmPassword')
  }
  )
  } 

  
  
  ngOnInit(): void {
   
    
  }

  //to transfer data between service and component
  sendValueIntoService(value: any) {
    this.productService.setdata(value);
}

  onFormSubmit(){
    console.log(this.addFbuilder.value)
    this.formValues = this.addFbuilder.value


    this.submitted = true
    if (this.addFbuilder.invalid) {
    
    } 

   
    if(!this.addFbuilder.invalid) {
      this.sendValueIntoService(this.formValues) 
      this.productService.postUsers().subscribe((users) => {
       
       this.users.push(users);
       console.log(this.users);

      const backResponse = users 
      
      if (backResponse.status==0) {
        alert('1- name: firstName + LastName' + "\n" + '2- password: must contain (capital letter + character)'+ "\n" +"3- password doesn't contain your name")
      } else {
      this.router.navigate([""])
      }
      });
    }

   
    
    
  }

  get f() { return this.addFbuilder.controls; }

  
}

 