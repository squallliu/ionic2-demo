import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageLoaderModule, ImgFallbackModule } from 'ext-ionic';

import { ImageLoaderPage } from './image-loader';

@NgModule({
  declarations: [
    ImageLoaderPage
  ],
  imports: [
    ImageLoaderModule.forRoot(),
    ImgFallbackModule.forRoot(),
    IonicPageModule.forChild(ImageLoaderPage)
  ],
  entryComponents: [
    ImageLoaderPage
  ]
})
export class ImageLoaderPageModule { }