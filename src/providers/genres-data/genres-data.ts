import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiUrl} from "../../app/app.module";

/*
  Generated class for the GenresDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenresDataProvider {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello GenresDataProvider Provider');
  }

  getAllGenres() {
    return new Promise(resolve => {
      this.http.get(apiUrl + '/genres/getAllGenres').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBookGenres(bookId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/books/getGenresOfBookByBookId', "id="+bookId, this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

}
