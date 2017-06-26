import { Component, OnInit } from '@angular/core';
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
  coord: any = {
    lat: 30.54976553037,
    lng: 114.28819134072
  };

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
