import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { BaiduPlacesProvider } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {
  fromTabs: boolean;
  starLevel: number = 4.5;
  dateTime: number = Date.now();
  coord: any = {};

  constructor(private navParams: NavParams, private bpProvider: BaiduPlacesProvider) {
  }

  starChange($event) {
    console.log(this.starLevel);
  }

  coordChange() {
    console.log(this.coord);
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }
}
