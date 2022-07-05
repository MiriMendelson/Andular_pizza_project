import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { OrdreServiceService } from '../Services/ordre-service.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  orderArr : Product[]
  TotalSum : number = 0
  Show : boolean = false

  constructor(private orderServis : OrdreServiceService) {
    this.orderArr = this.orderServis.getCurrOrder()
    this.orderArr.forEach(element => {
      this.TotalSum += element.price;
    });
   }

   delete( p : Product){
    this.orderServis.delete(p)
    this.TotalSum -= p.price
   }
   checkOut(){
    this.Show = !this.Show
   }
  ngOnInit() {
  }

}
