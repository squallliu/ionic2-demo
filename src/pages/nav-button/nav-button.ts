import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { NavButton } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-nav-button',
  templateUrl: 'nav-button.html',
})
export class NavButtonPage {
  navButtons: Array<NavButton> = [];

  numberButtons: Array<NavButton> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: 'BaiduMapPage' });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: 'BaiduMapPage' });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: 'BaiduMapPage' });
    this.navButtons.push({ icon: 'bookmarks', label: '测试', page: 'BaiduMapPage' });

    this.numberButtons.push({ number: 5, label: '测试', page: 'BaiduMapPage' });
    this.numberButtons.push({ number: 9, label: '测试', page: 'BaiduMapPage' });
    this.numberButtons.push({ number: 10, label: '测试', page: 'BaiduMapPage' });
    this.numberButtons.push({ number: 21, label: '测试', page: 'BaiduMapPage' });
  }

  click(item: NavButton) {
    this.navCtrl.push(item.page);
  }
}
