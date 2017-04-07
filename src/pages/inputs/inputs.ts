import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {
  fromTabs: boolean;
  starLevel: number = 4.5;

  constructor(private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }
}
