import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-file-button',
  templateUrl: 'file-button.html',
})
export class FileButtonPage {

  acceptValue = 'image/*';

  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = { abc: '123' };
  }

  doFileChange(e) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = (e: any) => {
      this.data.imgSrc = e.target.result;
    };
  }
}
