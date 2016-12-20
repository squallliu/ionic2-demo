import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenUrlModalController } from 'whcyit-ionic';

import { AlphaScrollPage } from '../alpha-scroll/alpha-scroll';

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
}
