import { Component } from '@angular/core';
import { JsonFileStorage, isPresent } from 'ext-ionic';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-json-storage',
  templateUrl: 'json-storage.html'
})
export class JsonStoragePage {
  jsonStr: string;
  storage: any = {};

  constructor(private jsonStorage: JsonFileStorage) {
    this.jsonStr = JSON.stringify({ name: '用户名', password: '密码' });
  }

  save() {
    let obj = JSON.parse(this.jsonStr);
    if (!isPresent(obj)) {
      console.log('输入的字符串必须是json格式');
      return;
    }
    this.jsonStorage.save({ filename: 'json', content: obj }).catch(e => console.log(e));
  }

  read() {
    this.jsonStorage.load({ filename: 'json', maxAge: 5000 }).then(o => {
      this.storage.jsonObj = o;
    }).catch(e => console.log(e));
  }

  delete() {
    this.jsonStorage.remove({ filename: 'json' }).then(_ => {
      this.storage.jsonObj = {};
    });
  }
}
