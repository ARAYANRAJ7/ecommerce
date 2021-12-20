import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './component/address/address.component';
import { CartComponent } from './component/cart/cart.component';
import { ItemComponent } from './component/item/item.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { ThankComponent } from './component/thank/thank.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login',component:LoginComponent},
  {
    path:'register',component:RegisterComponent
  },
  {path:'item',component:ItemComponent},
  {path:'address',component:AddressComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thankyou',component:ThankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }