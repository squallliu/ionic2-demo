import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HotUpdater } from 'ext-ionic';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private hotUpdater: HotUpdater
  ) {
    platform.ready().then(() => {
      hotUpdater.start();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
