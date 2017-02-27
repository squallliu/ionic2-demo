import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ExtIonicModule } from 'ext-ionic';
import { CustomIconsModule } from 'ionic2-custom-icons';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphaScrollPage } from '../pages/alpha-scroll/alpha-scroll';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { ImageLoaderPage } from '../pages/image-loader/image-loader';
import { FilterBarPage } from '../pages/filter-bar/filter-bar';
import { InputsPage } from '../pages/inputs/inputs';
import { IconsPage } from '../pages/icons/icons';
import { NotificationProgressPage } from '../pages/notification-progress/notification-progress';
import { JsonStoragePage } from "../pages/json-storage/json-storage";
import { RibbonPage } from "../pages/ribbon/ribbon";

const declarations: Array<any> = [
  MyApp,
  HomePage,
  AlphaScrollPage,
  BaiduMapPage,
  ImageLoaderPage,
  FilterBarPage,
  InputsPage,
  IconsPage,
  NotificationProgressPage,
  JsonStoragePage,
  RibbonPage
];

@NgModule({
  declarations: declarations,
  imports: [
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          statusbarPadding: true
        },
        ios: {
          backButtonText: ''
        }
      }
    }),
    ExtIonicModule.forRoot(),
    CustomIconsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: declarations,
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ListData]
})
export class AppModule { }
