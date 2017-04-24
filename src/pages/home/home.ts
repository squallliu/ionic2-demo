import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

import { OpenUrlModalController } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fromTabs: boolean;

  constructor(private openUrlCtrl: OpenUrlModalController, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
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
