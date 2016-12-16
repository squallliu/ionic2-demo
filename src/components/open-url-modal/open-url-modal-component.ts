import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ViewController, NavParams } from 'ionic-angular';
import { assert, isPresent } from 'ionic-angular/util/util';

import { OpenUrlModalOptions } from './open-url-modal-options';

@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="options.color">
        <ion-buttons end>
          <button ion-button icon-only (click)="dismiss()">
            <ion-icon name="close"></ion-icon>
          </button>
        </ion-buttons>
        <ion-title>{{options.title}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content class="open-url-modal-content">
      <iframe [src]="safeUrl"></iframe>
    </ion-content>
  `
})
export class OpenUrlModalCmp {
  options: OpenUrlModalOptions;
  safeUrl: SafeResourceUrl;

  constructor(private _navParams: NavParams, private viewCtrl: ViewController, private sanitizer: DomSanitizer) {
    this.options = _navParams.get('openUrlModalOptions');
    assert(this.options, 'openUrlModal options must be valid');

    this.options.color = isPresent(this.options.color) ? this.options.color : 'light';
    this.options.onmessage = isPresent(this.options.onmessage) ? this.options.onmessage : (e) => {};
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.options.url);

    window.addEventListener('message', this.options.onmessage, false);
  }

  dismiss() {
    this.viewCtrl.dismiss(this.options);
  }
}