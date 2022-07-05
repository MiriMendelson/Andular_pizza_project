import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinishOrderComponent } from './finish-order/finish-order.component';
import { HomeComponent } from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  //{path: '' ,component: NavBarComponent },
  {path: 'my cart' ,component: MyCartComponent },
  {path: 'products' ,component: ProductsListComponent },
  {path: 'home' ,component: HomeComponent },
  {path: 'finish/:id' ,component: FinishOrderComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
