import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ExtIonicModule } from 'ext-ionic';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

const declarations: Array<any> = [
  MyApp,
  HomePage
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
