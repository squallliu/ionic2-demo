import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-tabs',
  templateUrl: 'slide-tabs.html'
})
export class SlideTabsPage {
  page1: any = 'RibbonPage';
  page2: any = 'FilterBarPage';
  page3: any = 'InputsPage';

  params: any = {
    fromTabs: true
  };

  constructor() {
  }
}
