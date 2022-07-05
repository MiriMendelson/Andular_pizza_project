import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { OrdreServiceService } from '../Services/ordre-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() ProductDetails : Product
  constructor( private orderService : OrdreServiceService ) { }

  addToCart(){
    console.log(this.ProductDetails)
    this.orderService.addCurrOrder(this.ProductDetails)
  }

  ngOnInit() {
  }
 

}
