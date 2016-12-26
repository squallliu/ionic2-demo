import { Component } from '@angular/core';

import { ListData } from '../../providers/list-data';

@Component({
  selector: 'page-filter-bar',
  templateUrl: 'filter-bar.html'
})
export class FilterBarPage {
  items: Array<any> = [];

  constructor(private listData: ListData) {
    this.listData.list().then(data => {
      this.items = data;
    });
  }

  filter(e) {
    this.listData.filter(e.target.value).then(data => {
      this.items = data;
    });
  }
}
