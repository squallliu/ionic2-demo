import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryModule } from 'ext-ionic';
import { GalleryPage } from './gallery';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    GalleryModule.forRoot()
  ],
  exports: [
    GalleryPage
  ]
})
export class GalleryPageModule { }
