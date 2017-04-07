import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenUrlModalModule } from 'ext-ionic';

import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    OpenUrlModalModule.forRoot(),
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule { }