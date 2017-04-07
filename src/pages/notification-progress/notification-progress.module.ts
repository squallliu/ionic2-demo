import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NotificationProgressPage } from './notification-progress';

@NgModule({
  declarations: [
    NotificationProgressPage
  ],
  imports: [
    IonicPageModule.forChild(NotificationProgressPage)
  ],
  entryComponents: [
    NotificationProgressPage
  ]
})
export class NotificationProgressPageModule { }