import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class OrdreServiceService {

  constructor() { }
  private arrOrders : Array<Order> =[]
  private arrCurrOrder : Array<Product> =[]

  addOrder(o:Order){
    this.arrOrders.push(o);
  }
  getOrders(){
    return this.arrOrders;
  }
  addCurrOrder( p : Product){
    this.arrCurrOrder.push(p);
  }
  getCurrOrder(){
    return this.arrCurrOrder;
  }
  delete(d:Product){
    let s=this.arrCurrOrder.indexOf(d)
    this.arrCurrOrder.splice(s,1);
  }
}

