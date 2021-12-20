import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
   public upirul="http://localhost:5003/";
  makepayment(data:any):Observable<any>
  {
    return this.http.post(`${this.upirul}payment`,data);
  }
}
   