import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SignaturePadController } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-signature-view',
  templateUrl: 'signature-view.html',
})
export class SignatureViewPage {

  imgUrl: any;

  constructor(
    private sp: SignaturePadController
  ) {
  }

  signature(): void {
    this.sp.show({
      onDidDismiss: data => {
        this.imgUrl = data.dataUrl;
        console.log(data.formData);
      }
    });
  }
}
