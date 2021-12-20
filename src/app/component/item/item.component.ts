import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public productListForm!:FormGroup;

  constructor(private http:HttpClient,private formBuilder:FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productListForm=this.formBuilder.group({
      iname:'',
      price:'',
      image:'',
      quantity:''
    })
  }
  addproduct()
  {
    console.log(this.productListForm.value);
       this.productService.product(this.productListForm.value).subscribe((data:any)=>{
         alert('product Successfully added');
        this.router.navigate(['/products']);

       })
  }

}
