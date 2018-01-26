import { Component } from '@angular/core';

import { BaiduMapOptions, GpsPoint } from 'ext-ionic';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {
  mapOptions: BaiduMapOptions;

  constructor() {
    const point: GpsPoint = {
      lng: 121.506191,
      lat: 31.245554
    };
    this.mapOptions = {
      center: point,
      zoom: 17,
      city: 'ShangHai',
      markers: [{
        point: point,
        icon: './assets/imgs/baidu-map/mappoint.png',
        size: {
          width: 49,
          height: 60
        },
        label: { content: '测试' },
        infoWindow: {
          title: 'Where',
          content: '<a href="http://www.baidu.com" target="_blank">Put description here</a>'
        }
      }]
    };
  }
}
