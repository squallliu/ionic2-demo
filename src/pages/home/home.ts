import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenUrlModalController } from 'ext-ionic';

import { AlphaScrollPage } from '../alpha-scroll/alpha-scroll';
import { BaiduMapPage } from '../baidu-map/baidu-map';
import { ImageLoaderPage } from '../image-loader/image-loader';
import { FilterBarPage } from '../filter-bar/filter-bar';
import { InputsPage } from '../inputs/inputs';
import { IconsPage } from '../icons/icons';
import { NotificationProgressPage } from '../notification-progress/notification-progress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private openUrlCtrl: OpenUrlModalController, private navCtrl: NavController) {
  }

  openExternalUrl() {
    this.openUrlCtrl.open({
      title: '百度',
      url: 'http://www.baidu.com'
    });
  }

  alphaList() {
    this.navCtrl.push(AlphaScrollPage);
  }

  baiduMap() {
    this.navCtrl.push(BaiduMapPage);
  }

  filterBar() {
    this.navCtrl.push(FilterBarPage);
  }

  imageLoader() {
    this.navCtrl.push(ImageLoaderPage);
  }

  inputs() {
    this.navCtrl.push(InputsPage);
  }

  icons() {
    this.navCtrl.push(IconsPage);
  }

  notifiy() {
    this.navCtrl.push(NotificationProgressPage);
  }
}
