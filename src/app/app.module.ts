import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { ExtIonicModule } from 'ext-ionic';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';

const declarations: Array<any> = [
  MyApp
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
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
    Deeplinks,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListData
  ]
})
export class AppModule { }
