import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/Order';
import { OrdreServiceService } from '../Services/ordre-service.service';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.css']
})
export class FinishOrderComponent implements OnInit {

  index: number;
  constructor(private router1: ActivatedRoute, private orderS: OrdreServiceService) { }
 
  ngOnInit() {
    this.router1.params.subscribe(l => {
      this.index = l["id"];
      })
     
  }
  
}
