import { Component, Injectable } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular'

@Injectable()
export class OpenUrlModalController {
  constructor(private modalCtrl: ModalController) {}

  open() {
    let modal = this.modalCtrl.create(OpenUrlModalCmp);
    modal.present();
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-buttons end>
          <button ion-button icon-only (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </button>
        </ion-buttons>
        <ion-title>百度</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content class="open-url-modal-content">
      <iframe src="http://www.baidu.com"></iframe>
    </ion-content>
  `
})
export class OpenUrlModalCmp {
  constructor(private viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

