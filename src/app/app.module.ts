import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ExtIonicModule } from 'ext-ionic';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphaScrollPage } from '../pages/alpha-scroll/alpha-scroll';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { ImageLoaderPage } from '../pages/image-loader/image-loader';
import { FilterBarPage } from '../pages/filter-bar/filter-bar';
import { InputsPage } from '../pages/inputs/inputs';
import { NotificationProgressPage } from '../pages/notification-progress/notification-progress';
import { JsonStoragePage } from '../pages/json-storage/json-storage';
import { RibbonPage } from '../pages/ribbon/ribbon';
import { DownloadManagerPage } from '../pages/download-manager/download-manager';
import { SlideTabsPage } from '../pages/slide-tabs/slide-tabs';

const declarations: Array<any> = [
  MyApp,
  HomePage,
  AlphaScrollPage,
  BaiduMapPage,
  ImageLoaderPage,
  FilterBarPage,
  InputsPage,
  NotificationProgressPage,
  JsonStoragePage,
  RibbonPage,
  DownloadManagerPage,
  SlideTabsPage
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
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
    ExtIonicModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: declarations,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListData
  ]
})
export class AppModule { }
