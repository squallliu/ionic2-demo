import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaiduMapModule } from 'ext-ionic';

import { BaiduMapPage } from './baidu-map';

@NgModule({
  declarations: [
    BaiduMapPage
  ],
  imports: [
    BaiduMapModule,
    IonicPageModule.forChild(BaiduMapPage)
  ],
  entryComponents: [
    BaiduMapPage
  ]
})
export class BaiduMapPageModule { }