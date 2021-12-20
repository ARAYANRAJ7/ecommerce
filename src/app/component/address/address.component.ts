import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public addressForm !:FormGroup

  constructor(private http:HttpClient,private AddService:AddressService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.addressForm=this.formBuilder.group({
      name:'',
      village:'',
      street:'',
      landmark:'',
      pincode:'',
      mobile:''
    })
  }
gopayment()
{
   this.AddService.addaddress(this.addressForm.value).subscribe((data)=>{
     alert("sucessfully adredes added");
     this.router.navigate(['/payment']);

   })
}

}

