import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar, Splashscreen, Device } from 'ionic-native';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, config: Config) {
    platform.ready().then(() => {
      config.set('android', 'statusbarPadding', !(Device.manufacturer === 'HUAWEI'));
      this.rootPage = HomePage;

      StatusBar.styleDefault();
      if (window['ImmersePlugin']) {
        window['ImmersePlugin'].setDarkMode(true);
      }
      Splashscreen.hide();
    });
  }
}
