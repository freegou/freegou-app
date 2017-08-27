import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var AMap;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  constructor(public navCtrl: NavController, private http: Http) {

  }

  ionViewDidEnter() {
    var map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 10, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
    this.http.get('http://test.cloudwarehub.com/shop?pageSize=100&page=1').map(res => res.json()).subscribe(res => {console.log(res)
      res.data.forEach(shop => {
        new AMap.Marker({
          position: JSON.parse(shop.gps),
          title: shop.name,
          map: map
        });
      })

    })

  }

}
