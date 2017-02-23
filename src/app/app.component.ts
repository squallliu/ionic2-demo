import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HotUpdater } from 'ext-ionic';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, config: Config, hotUpdater: HotUpdater) {
    platform.ready().then(() => {
      hotUpdater.start();

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
