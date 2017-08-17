import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';
import { FilterBarPage } from '../filter-bar/filter-bar';

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
    this.appCtrl.getRootNav().push(FilterBarPage);
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }
}
