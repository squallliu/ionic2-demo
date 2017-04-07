import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FilterBarPage } from './filter-bar';

@NgModule({
  declarations: [
    FilterBarPage
  ],
  imports: [
    IonicPageModule.forChild(FilterBarPage)
  ],
  entryComponents: [
    FilterBarPage
  ]
})
export class FilterBarPageModule { }