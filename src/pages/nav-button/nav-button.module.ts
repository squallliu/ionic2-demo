import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavButtonBarModule } from 'ext-ionic';
import { NavButtonPage } from './nav-button';

@NgModule({
  declarations: [
    NavButtonPage
  ],
  imports: [
    NavButtonBarModule.forRoot(),
    IonicPageModule.forChild(NavButtonPage)
  ],
  entryComponents: [
    NavButtonPage
  ]
})
export class NavButtonPageModule { }