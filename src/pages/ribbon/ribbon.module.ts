import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RibbonModule } from 'ext-ionic';

import { RibbonPage } from './ribbon';

@NgModule({
  declarations: [
    RibbonPage
  ],
  imports: [
    RibbonModule.forRoot(),
    IonicPageModule.forChild(RibbonPage)
  ],
  entryComponents: [
    RibbonPage
  ]
})
export class RibbonPageModule { }