import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WhcyitModule } from 'whcyit-ionic';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphaScrollPage } from '../pages/alpha-scroll/alpha-scroll';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { ImageLoaderPage } from '../pages/image-loader/image-loader';
import { FilterBarPage } from '../pages/filter-bar/filter-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphaScrollPage,
    BaiduMapPage,
    ImageLoaderPage,
    FilterBarPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          statusbarPadding: true
        }
      }
    }),
    WhcyitModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlphaScrollPage,
    BaiduMapPage,
    ImageLoaderPage,
    FilterBarPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ListData]
})
export class AppModule { }
