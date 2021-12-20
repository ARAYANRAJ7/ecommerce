import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm !:FormGroup;

  constructor(private userservce:UserService,private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      fullname:[''],
      email:[''],
      Dob:[''],
      password:[''],
      confirmPassword:['']
    }) 
    
  }
  register()
  {
    this.userservce.register(this.registerForm.value).subscribe((data:any)=>{
      this.router.navigate(['/login'])
    })
  }
  
  
  
}
