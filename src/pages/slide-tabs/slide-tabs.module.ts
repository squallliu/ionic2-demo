import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsModule } from 'ext-ionic';

import { SlideTabsPage } from './slide-tabs';

@NgModule({
  declarations: [
    SlideTabsPage
  ],
  imports: [
    TabsModule,
    IonicPageModule.forChild(SlideTabsPage)
  ],
  entryComponents: [
    SlideTabsPage
  ]
})
export class SlideTabsPageModule { }