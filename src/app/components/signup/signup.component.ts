import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import {MustMatch} from 'src/app/_helpers/must-match.validator'
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-form-builder-add',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  formValues:any [] = []
  addFbuilder
  submitted= false
  users:any []=[]

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private productService:ProductService) { 


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
  onFormSubmit(){
    console.log(this.addFbuilder.value)
    this.formValues = this.addFbuilder.value
    this.submitted = true
    if (this.addFbuilder.invalid) {
    
    } 

    this.productService.postUsers().subscribe((users) => {
       
      this.users.push(users);
     console.log(this.users);
    });
    /* this.http.post<any>('localhost:3000/user/add', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.postId = data.name;
  }) */
    
    
  }

  get f() { return this.addFbuilder.controls; }

  
}

