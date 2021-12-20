import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService,private prodService:ProductService) { 
    this.prodService.getproduct().subscribe((data:any)=>{
        this.productList=data;
        console.log(this.productList);
    })
  }

  ngOnInit(): void {
    /*this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  */

  }
  addtocart(item:any)
  {
   // alert(item);
    let user:any = localStorage.getItem('user')

    //console.log(user);
    item.userid = JSON.parse(user).Id
     console.log(item);
    this.prodService.addCartDetails(item).subscribe((data:any)=>{

        console.log(data);
     })
    
  }
  filter(category:any)
  {

  }
}
