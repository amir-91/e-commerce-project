import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addFbuilder
  submitted= false

  constructor(private fb: FormBuilder,
              private http: HttpClient) { 


  this.addFbuilder = this.fb.group({
    name:[,[Validators.required, Validators.minLength(6)]],
    
    password: ['', [Validators.required, Validators.minLength(6)]],
   
  
  }, 
  )
  } 

  

  ngOnInit(): void {
   
    
  }
  onFormSubmit(){
    console.log(this.addFbuilder.value)
    this.submitted = true
    if (this.addFbuilder.invalid) {
    
    } 
    
    
    
  }

  get f() { return this.addFbuilder.controls; }

  
}

