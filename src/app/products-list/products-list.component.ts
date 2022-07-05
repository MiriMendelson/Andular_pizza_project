import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private servise:ProductServiceService) { 
    this.productsArr = servise.getProduct()
  }

  productsArr : Product[]
  
  ngOnInit() {
  }

}
