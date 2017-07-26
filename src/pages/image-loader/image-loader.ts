import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-image-loader',
  templateUrl: 'image-loader.html'
})
export class ImageLoaderPage {
  testSrc;

  constructor() { }

  test() {
    this.testSrc = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
  }
}
