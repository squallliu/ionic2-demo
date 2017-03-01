import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DownloadManagerController, isPresent, DownloadManagerCmp } from 'ext-ionic';

@Component({
  selector: 'page-download-manager',
  templateUrl: 'download-manager.html'
})
export class DownloadManagerPage {
  url: string;
  fileName: string;

  constructor(private navCtrl: NavController, private download: DownloadManagerController) {
    this.url = 'http://10.68.19.121:8101/1.PAK';
    this.fileName = '1.PAK';
  }

  onDownload() {
    if (isPresent(this.url) && isPresent(this.fileName)) {
      this.download.download({ url: this.url, filePath: '/temp', fileName: this.fileName })
        .catch(e => {
          console.log(e);
        });
      this.navCtrl.push(DownloadManagerCmp);
    }
  }
}
