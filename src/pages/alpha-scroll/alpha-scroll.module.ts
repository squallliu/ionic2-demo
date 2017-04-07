import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphaScrollModule } from 'ext-ionic';

import { AlphaScrollPage } from './alpha-scroll';

@NgModule({
  declarations: [
    AlphaScrollPage
  ],
  imports: [
    AlphaScrollModule,
    IonicPageModule.forChild(AlphaScrollPage)
  ],
  entryComponents: [
    AlphaScrollPage
  ]
})
export class AlphaScrollPageModule { }