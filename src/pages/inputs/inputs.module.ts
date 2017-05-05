import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarRatingModule } from 'ext-ionic';

import { InputsPage } from './inputs';

@NgModule({
  declarations: [
    InputsPage
  ],
  imports: [
    StarRatingModule.forRoot(),
    IonicPageModule.forChild(InputsPage)
  ],
  entryComponents: [
    InputsPage
  ]
})
export class InputsPageModule { }