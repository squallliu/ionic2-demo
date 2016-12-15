import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OpenUrlModalCmp, OpenUrlModalController } from './open-url-modal/open-url-modal';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    OpenUrlModalCmp
  ],
  entryComponents: [
    OpenUrlModalCmp
  ],
  providers: [
    OpenUrlModalController
  ]
})
export class WhcyitModule {}