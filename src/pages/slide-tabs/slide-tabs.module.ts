import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from 'ext-ionic';

import { SlideTabsPage } from './slide-tabs';

@NgModule({
  declarations: [
    SlideTabsPage
  ],
  imports: [
    SuperTabsModule.forRoot(),
    IonicPageModule.forChild(SlideTabsPage)
  ],
  entryComponents: [
    SlideTabsPage
  ]
})
export class SlideTabsPageModule { }