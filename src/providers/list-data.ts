import { Injectable } from '@angular/core';

@Injectable()
export class ListData {
  private items: Array<any> = [];

  constructor() {
    const str: string = 'ABCJLDEFGOQRHINSXY';
    for (let i: number = 0; i < str.length; i++) {
      const nextChar: string = str.charAt(i);
      for (let j: number = 0; j < 3; j++) {
        const name: string = nextChar + 'name' + j;
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
    searchTerm = searchTerm || '';
    return new Promise<Array<any>>(resolve => {
      resolve(this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }));
    });
  }
}
