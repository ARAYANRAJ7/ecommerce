import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  public username:any;
  constructor(private cartService : CartService) { }


  ngOnInit(): void {
    let user:any = localStorage.getItem('user')

    //console.log(user);
    let userid = JSON.parse(user).Id
     this.username=JSON.parse(user).password

     console.log(this.username);
    this.cartService.getcartdetails(userid)
    .subscribe((res:any)=>{
      this.totalItem = res.length;
    })
    
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
