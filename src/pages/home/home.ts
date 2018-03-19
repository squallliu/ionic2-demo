import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Dialog, OpenUrlModalController } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private openUrlCtrl: OpenUrlModalController, private navCtrl: NavController, private dialog: Dialog) {
    this.dialog.alert('test', 'ok');
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

  gallery() {
    this.navCtrl.push('GalleryPage');
  }

  navButton() {
    this.navCtrl.push('NavButtonPage');
  }

  signaturePad() {
    this.navCtrl.push('SignatureViewPage');
  }

  uploadFile() {
    this.navCtrl.push('FileButtonPage');
  }
}
