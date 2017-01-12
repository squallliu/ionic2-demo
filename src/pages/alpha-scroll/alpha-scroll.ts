import { Component } from '@angular/core';

import { ListData } from '../../providers/list-data';

@Component({
  selector: 'page-alpha-scroll',
  templateUrl: 'alpha-scroll.html'
})
export class AlphaScrollPage {
  breeds: Array<any> = [];
  currentPageClass = this;

  constructor(private listData: ListData) {
    this.listData.list().then(data => {
      this.breeds = data;
    });
  }

  onItemClick(item) {
    console.log(item);
  }
}
