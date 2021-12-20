import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }
  public url='http://localhost:5000/';
  register(data:any): Observable<any>{
    console.log(data)
    return this.http.post(`${this.url}register`,data);
  }
  
    logindata(loginobj: any): Observable<any> {
      return this.http.post(`${this.url}login`, loginobj, { headers: { 'content-type': 'application/json' }, responseType: 'text' })
    }
    

}
