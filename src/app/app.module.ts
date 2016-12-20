import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WhcyitModule } from 'whcyit-ionic';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphaScrollPage } from '../pages/alpha-scroll/alpha-scroll';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphaScrollPage
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
    AlphaScrollPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
