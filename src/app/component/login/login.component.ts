import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
    
  }
  login()
  {
    this.userservice.logindata(this.loginForm.value).subscribe((data:any)=>
    {
      alert("Successfully Login");
      
     var  data=(JSON.parse(data).data);
      localStorage.setItem('user',JSON.stringify(data))
      this.router.navigate(['/products'])
     
    },
    err=>{
      
      alert("User Not Found ")
    });
  }

}
