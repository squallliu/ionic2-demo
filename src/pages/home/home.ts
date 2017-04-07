import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenUrlModalController } from 'ext-ionic';

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
    this.navCtrl.push('AlphaScrollPage');
  }

  baiduMap() {
    this.navCtrl.push('BaiduMapPage');
  }

  filterBar() {
    this.navCtrl.push('FilterBarPage');
  }

  imageLoader() {
    this.navCtrl.push('ImageLoaderPage');
  }

  inputs() {
    this.navCtrl.push('InputsPage');
  }

  notifiy() {
    this.navCtrl.push('NotificationProgressPage');
  }

  jsonStorage() {
    this.navCtrl.push('JsonStoragePage');
  }

  ribbon() {
    this.navCtrl.push('RibbonPage');
  }

  downloadManager() {
    this.navCtrl.push('DownloadManagerPage');
  }

  slideTabs() {
    this.navCtrl.push('SlideTabsPage');
  }
}
