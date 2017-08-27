import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  
  orders: string = 'ing'

  constructor(public navCtrl: NavController) {

  }

}
