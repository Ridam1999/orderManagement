import { Component, OnInit } from '@angular/core';
import OrderJson from '../orders.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  Orders: ORDERS[] = OrderJson;

  constructor() { }

  ngOnInit(): void {
  }

}

interface ORDERS {
  orderNumber: String;
  orderDueDate: String;
  buyerName: String;
  address: String;
  phone: String;
  total: String;
}