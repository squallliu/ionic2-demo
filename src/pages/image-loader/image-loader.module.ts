import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageLoaderModule } from 'ext-ionic';

import { ImageLoaderPage } from './image-loader';

@NgModule({
  declarations: [
    ImageLoaderPage
  ],
  imports: [
    ImageLoaderModule,
    IonicPageModule.forChild(ImageLoaderPage)
  ],
  entryComponents: [
    ImageLoaderPage
  ]
})
export class ImageLoaderPageModule { }