import { Injectable } from '@angular/core';

@Injectable()
export class ListData {
  private items: Array<any> = [];

  constructor() {
    let str: string = "ABCJLDEFGOQRHINSXY";
    for (let i: number = 0; i < str.length; i++) {
      let nextChar: string = str.charAt(i);
      for (let j: number = 0; j < 3; j++) {
        let name: string = nextChar + 'name' + j;
        this.items.push({
          name: name,
          description: 'My name is ' + name
        });
      }
    }
  }

  list(): Promise<Array<any>> {
    return new Promise<Array<any>>(resolve => {
      resolve(this.items);
    });
  }

  filter(searchTerm): Promise<Array<any>> {
    return new Promise<Array<any>>(resolve => {
      resolve(this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }));
    });
  }
}
