import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DownloadManagerController, DownloadOptions, DownloadManagerCmp } from 'ext-ionic';

@Component({
  selector: 'page-download-manager',
  templateUrl: 'download-manager.html'
})
export class DownloadManagerPage {
  downloadOptions: DownloadOptions;

  constructor(private navCtrl: NavController, private downloadManagerCtrl: DownloadManagerController) {
    this.downloadOptions = { url: 'http://10.68.19.121:8101/1.PAK', fileName: '1.PAK' };
  }

  onDownload() {
    this.downloadManagerCtrl.download(this.downloadOptions)
      .catch(e => {
        console.log(e);
      });
    this.navCtrl.push(DownloadManagerCmp);
  }
}
