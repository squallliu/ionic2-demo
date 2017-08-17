import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Dialog, DownloadManagerController, DownloadOptions } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-download-manager',
  templateUrl: 'download-manager.html'
})
export class DownloadManagerPage {
  downloadOptions: DownloadOptions;

  constructor(
    private navCtrl: NavController,
    private downloadManagerCtrl: DownloadManagerController,
    private dialog: Dialog
  ) {
    this.downloadOptions = {
      url: 'http://10.68.19.121:8101/1.PAK',
      fileName: '1.PAK',
      filePath: 'temp/'
    };
  }

  onDownload() {
    this.downloadManagerCtrl.download(this.downloadOptions).catch(e => {
      this.dialog.alert('', '无效的下载地址');
      console.log(e);
    });
    this.onDownloadManager();
  }

  onDownloadManager() {
    this.downloadManagerCtrl.show(this.navCtrl);
  }
}
