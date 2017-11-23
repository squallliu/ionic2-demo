import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { BaiduPlacesProvider, Dialog } from 'ext-ionic';

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

  constructor(private navParams: NavParams, public placesProvider: BaiduPlacesProvider, private dialog: Dialog) {
    this.dialog.alert('提示', '账号：' + this.navParams.get('account') + '\n密码：' + this.navParams.get('password'));
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
