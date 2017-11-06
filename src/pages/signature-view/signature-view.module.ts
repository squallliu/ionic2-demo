import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignatureViewPage } from './signature-view';

@NgModule({
  declarations: [
    SignatureViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SignatureViewPage),
  ],
})
export class SignatureViewPageModule {}
