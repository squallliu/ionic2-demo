import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadManagerModule } from 'ext-ionic';

import { DownloadManagerPage } from './download-manager';

@NgModule({
  declarations: [
    DownloadManagerPage
  ],
  imports: [
    DownloadManagerModule,
    IonicPageModule.forChild(DownloadManagerPage)
  ],
  entryComponents: [
    DownloadManagerPage
  ]
})
export class DownloadManagerPageModule { }