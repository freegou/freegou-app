import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var AMap;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    new AMap.Map(this.map_container.nativeElement, {
      mapStyle: 'amap://styles/normal'//样式URL
    });
  }

}
