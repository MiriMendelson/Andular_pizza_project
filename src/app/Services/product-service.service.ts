import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private  productList:Product[]=[
    {name:"France Pizza",id:"12345", price:50, imgURL:"5.jpg"},
    {name:"Italian Pizza",id:"45788", price:40, imgURL:"9.jpg"},
    {name:"Milan Pizza",id:"98741", price:50, imgURL:"7.jpg"}
  ]

  
  getProduct(){
    return this.productList
  }

  addProduct(p:Product){
    this.productList.push(p)
  }
}
