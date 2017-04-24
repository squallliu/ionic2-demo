import { Component } from '@angular/core';
import { NavParams, IonicPage, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ribbon',
  templateUrl: 'ribbon.html'
})
export class RibbonPage {
  fromTabs: boolean;

  constructor(public appCtrl: App, private navParams: NavParams) {
  }

  test() {
    this.appCtrl.getRootNav().push('FilterBarPage');
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }
}
