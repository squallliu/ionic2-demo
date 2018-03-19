import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileButtonPage } from './file-button';
import { FileButtonModule } from 'ext-ionic';

@NgModule({
  declarations: [
    FileButtonModule
  ],
  imports: [
    FileButtonPageModule,
    IonicPageModule.forChild(FileButtonPage)
  ],
})
export class FileButtonPageModule { }
