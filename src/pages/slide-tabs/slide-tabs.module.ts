import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideTabsModule } from 'ext-ionic';

import { SlideTabsPage } from './slide-tabs';

@NgModule({
  declarations: [
    SlideTabsPage
  ],
  imports: [
    SlideTabsModule.forRoot(),
    IonicPageModule.forChild(SlideTabsPage)
  ],
  entryComponents: [
    SlideTabsPage
  ]
})
export class SlideTabsPageModule { }