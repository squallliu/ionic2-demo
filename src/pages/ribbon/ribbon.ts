import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ribbon',
  templateUrl: 'ribbon.html'
})
export class RibbonPage {
  fromTabs: boolean;

  constructor(private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }

}
