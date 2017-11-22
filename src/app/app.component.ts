import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { HotUpdater } from 'ext-ionic';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage: any = 'HomePage';

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private hotUpdater: HotUpdater,
    private deeplinks: Deeplinks
  ) {
    this.platform.ready().then(() => {
      this.deeplinks.routeWithNavController(this.nav, {
        '/inputs': 'InputsPage'
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
      }, (nomatch) => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
      });

      this.hotUpdater.start();

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
