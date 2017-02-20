import { Component } from '@angular/core';
import { JsonStorage, isPresent } from "ext-ionic";

@Component({
  selector: 'page-json-storage',
  templateUrl: 'json-storage.html'
})
export class JsonStoragePage {
  jsonStr: string;
  storage: any = {};

  constructor(private jsonStorage: JsonStorage) {
    this.jsonStr = JSON.stringify({ name: '用户名', password: '密码' });
  }

  save() {
    let obj = JSON.parse(this.jsonStr);
    if (!isPresent(obj)) {
      console.log('输入的字符串必须是json格式');
      return;
    }
    this.jsonStorage.save('json', obj).then(success => {
      if (success) {
        return this.jsonStorage.load('json');
      }
    }).then(o => {
      if (isPresent(o)) {
        this.storage.jsonObj = o;
      }
    });
  }

  delete() {
    this.jsonStorage.remove('json').then(_ => {
      this.storage.jsonObj = {};
    });
  }
}
