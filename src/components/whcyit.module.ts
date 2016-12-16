import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { OpenUrlModalCmp } from './open-url-modal/open-url-modal-component';
import { OpenUrlModalController } from './open-url-modal/open-url-modal';

export { OpenUrlModalController } from './open-url-modal/open-url-modal';

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