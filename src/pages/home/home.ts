import { Component } from '@angular/core';

import { OpenUrlModalController } from '../../components/open-url-modal/open-url-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private openUrlCtrl: OpenUrlModalController) {
  }

  openExternalUrl() {
    this.openUrlCtrl.open();
  }
}
