import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    
  constructor(private http:HttpClient) { }
  public url='http://localhost:5001/';
  addaddress(data:any):Observable<any>
  {
        return this.http.post(`${this.url}address`,data);
  }
}
