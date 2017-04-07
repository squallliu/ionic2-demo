import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { JsonStoragePage } from './json-storage';

@NgModule({
  declarations: [
    JsonStoragePage
  ],
  imports: [
    IonicPageModule.forChild(JsonStoragePage)
  ],
  entryComponents: [
    JsonStoragePage
  ]
})
export class JsonStoragePageModule { }