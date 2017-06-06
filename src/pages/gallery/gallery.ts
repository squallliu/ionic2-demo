import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GalleryOptions } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  options: GalleryOptions = {
    colWidth: 100
  };
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 20; i++) {
      this.items.push({
        url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
      });
    }
  }

  itemClick(e) {
    console.log(e);
  }
}
