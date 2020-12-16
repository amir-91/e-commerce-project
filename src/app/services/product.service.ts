import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private base_URL = "http://localhost:3000"//this is the base url used in backend

  
  httpOptionsNoAuth : any;
  productDetails: any;

  constructor(private http: HttpClient) { 
    this.httpOptionsNoAuth = {
      headers: new HttpHeaders().set('No-Auth', 'true')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("Access-Control-Allow-Methods" , 'GET,POST,PATCH,DELETE,PUT,OPTIONS') 
      .set ("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type')
  };
  }

  
 //to transfer data between component to the service
  private signupData: any;
  private loginData: any;

  public setdata(value: any) {
      this.signupData = value;
      console.log('here in service')
      console.log(this.signupData)
  }

  public setdata2(value: any) {
    this.loginData = value;
    console.log('here in service')
    console.log(this.loginData)
}

  public setProductDetails(value: any) {
    this.productDetails = value;
    
    console.log(this.productDetails)
}

  public login(value: any) {
    this.loginData = value;
    console.log('here in service')
    console.log(this.loginData)
}

  getProductDetails () {
    console.log('here in service')
    return this.productDetails
    
  }



  //for profile component
  getSignUp () {
    return this.signupData
  }


  getAllProducts (): Observable <any> {
    return this.http.get<any>("http://geebly.ahmedkhattab.com/api/v1/categories", { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }

  postUsers (): Observable <any> {
    return this.http.post<any>("http://localhost:3000/user/add", this.signupData); //this will return observable (stream of data contiously)
  }

  loginUser (): Observable <any> {
    return this.http.post<any>("http://localhost:3000/login", this.loginData); //this will return observable (stream of data contiously)
  }

  
}


