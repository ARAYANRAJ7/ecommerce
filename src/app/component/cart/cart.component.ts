import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public cartDetails:any;
  constructor(private cartService : CartService,private proService:ProductService) { }

  ngOnInit(): void {
    this.getcartdata();

   /* this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    */
   
  }
  getcartdata()
  {
    let user:any = localStorage.getItem('user')

    //console.log(user);
    let userid = JSON.parse(user).Id
    this.cartService.getcartdetails(userid).subscribe((data)=>{
      this.cartDetails=data;
      console.log(this.cartDetails);
     })
  }
  removeItem(item: any){
     this.proService.deleteCartDetails(item.ID).subscribe((data)=>{
       console.log({data});
       this.getcartdata();
       
     })
  }
  emptycart(){
    
  }
  

}
