import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from 'ionic-angular';

import { OpenUrlModalOptions } from './open-url-modal-options';
import { OpenUrlModalCmp } from './open-url-modal-component';

@Injectable()
export class OpenUrlModalController {
  constructor(private modalCtrl: ModalController) {}

  open(opts: OpenUrlModalOptions = {}, modalOpts: ModalOptions = {}) {
    let modal = this.modalCtrl.create(OpenUrlModalCmp, { openUrlModalOptions: opts} , modalOpts);
    modal.onDidDismiss(data => {
      window.removeEventListener('message', data.onmessage, false);
    });
    modal.present();
  }
}

