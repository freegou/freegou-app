import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OrdersPage } from '../orders/orders';
import {Tabs} from "ionic-angular/index";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  ordersPage = OrdersPage;

  constructor() {

  }

  ionViewDidEnter() {
    setTimeout(() => {
      var tab = this.getParameterByName('tab');
      switch (tab) {
        case 'presell':
          this.tabRef.select(0);
          break;
        case 'orders':
          this.tabRef.select(1);
          break;
        case 'me':
          this.tabRef.select(2);
          break;
        case 'about':
          this.tabRef.select(3);
          break;

      }
    }, 200)

  }

  getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
