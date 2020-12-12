import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private base_URL = "http://localhost:3000"//this is the base url used in backend

  
  httpOptionsNoAuth : any;

  constructor(private http: HttpClient) { 
    this.httpOptionsNoAuth = {
      headers: new HttpHeaders().set('No-Auth', 'true')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("Access-Control-Allow-Methods" , 'GET,POST,PATCH,DELETE,PUT,OPTIONS') 
      .set ("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type')
  };
  }

  

  getAllProducts (): Observable <any> {
    return this.http.get<any>("http://geebly.ahmedkhattab.com/api/v1/categories", { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }

  postUsers (): Observable <any> {
    return this.http.post<any>("http://localhost:3000/user/add", { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }

  
}


