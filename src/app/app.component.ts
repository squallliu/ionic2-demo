import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HotUpdater } from 'ext-ionic';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private hotUpdater: HotUpdater
  ) {
    this.platform.ready().then(() => {
      this.hotUpdater.start();

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
