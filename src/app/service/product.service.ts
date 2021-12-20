import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient) { }
  public url='http://localhost:5001/';
  product(data:any):Observable<any>{
     return this.http.post(`${this.url}productList`,data);
  }
  getproduct()
  {
    return this.http.get(`${this.url}getproduct`);
  }
  addCartDetails(data:any):Observable<any>{
    return this.http.post(`${this.url}addCart`,data);
 }
 deleteCartDetails(id:any):Observable<any>
 {
    let URL = this.url +"deletecartitem/"+id;
    return this.http.delete(URL);
 }
  
  
}
