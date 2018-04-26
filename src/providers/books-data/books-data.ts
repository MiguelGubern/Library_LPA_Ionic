import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksDataProvider {

  apiUrl = 'http://172.20.10.3:3000';

  constructor(public http: HttpClient) {
    console.log('Hello BooksDataProvider Provider');
  }

  getBooks(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl + '/books/getAllBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
