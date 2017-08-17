import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { ListData } from '../../providers/list-data';

@IonicPage()
@Component({
  selector: 'page-filter-bar',
  templateUrl: 'filter-bar.html'
})
export class FilterBarPage {
  fromTabs: boolean;
  items: Array<any> = [];

  constructor(private listData: ListData, private navParams: NavParams) {
    this.listData.list().then(data => {
      this.items = data;
    });
  }

  filter(e) {
    this.listData.filter(e.target.value).then(data => {
      this.items = data;
    });
  }

  ionViewDidLoad() {
    this.fromTabs = this.navParams.get('fromTabs');
  }
}
