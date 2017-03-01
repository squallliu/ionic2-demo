import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { isPresent } from 'ext-ionic';

@Component({
  selector: 'page-download-manager',
  templateUrl: 'download-manager.html'
})
export class DownloadManagerPage {
  url: string;
  fileName: string;

  constructor(private navCtrl: NavController) {
    this.url = 'http://10.68.19.121:8101/1.PAK';
    this.fileName = '1.PAK';
  }

  onDownload() {
    if (isPresent(this.url) && isPresent(this.fileName)) {
    }
  }
}
