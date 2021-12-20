import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public paymentForm !:FormGroup

  constructor(private hhtp:HttpClient,private payService:PaymentService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.paymentForm=this.formBuilder.group({
      name:'',
      email:'',
      amount:''
    })
  }
  payment()
  {
    this.payService.makepayment(this.paymentForm.value).subscribe((data)=>{
      //console.log(data);
      alert("Payment Suceesfully");
      this.router.navigate(['/thank']);
      
    },err=>{
      console.log(err);
    })
     
  }

}
