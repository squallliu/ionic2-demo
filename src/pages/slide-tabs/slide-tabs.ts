import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RibbonPage } from '../ribbon/ribbon';
import { FilterBarPage } from '../filter-bar/filter-bar';
import { InputsPage } from '../inputs/inputs';

@Component({
  selector: 'page-slide-tabs',
  templateUrl: 'slide-tabs.html'
})
export class SlideTabsPage {
  page1: any = RibbonPage;
  page2: any = FilterBarPage;
  page3: any = InputsPage;

  params: any = {
    fromTabs: true
  };

  constructor(private navCtrl: NavController) {
  }
}
