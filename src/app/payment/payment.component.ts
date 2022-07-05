import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { OrdreServiceService } from '../Services/ordre-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  newOrder:Order = new Order()
  @Input() payment:number
  static orderNumber:number = 1;

  constructor(private router:Router, private service:OrdreServiceService) {
    this.newOrder.payment = this.payment;
    this.newOrder.orderNumber = PaymentComponent.orderNumber++;
   }

  ngOnInit() {
  }
  Finish(){
    this.service.addOrder(this.newOrder);  
    this.router.navigateByUrl(`/finish/${this.newOrder.orderNumber}`)
  }

}
