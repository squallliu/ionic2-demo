import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileButtonModule } from 'ext-ionic';
import { FileButtonPage } from './file-button';

@NgModule({
  declarations: [
    FileButtonPage
  ],
  imports: [
    FileButtonModule.forRoot(),
    IonicPageModule.forChild(FileButtonPage)
  ],
  entryComponents: [
    FileButtonPage
  ]
})
export class FileButtonPageModule { }
