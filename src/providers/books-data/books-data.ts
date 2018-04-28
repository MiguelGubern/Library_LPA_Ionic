import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksDataProvider {

  apiUrl = 'http://192.168.10.2:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello BooksDataProvider Provider');
  }



  // GET:
  // books/getTrendingBooks
  // books/getTopRatedBooks
  // genres/getAllGenres
  //
  // POST:
  // books/searchBooks
  //   name
  //   author
  //   publisher
  //   genre
  //
  // books/searchBooksByISBN
  //   isbn   /books/getLoanAvailabilityByBookId

  getLoanAvailability(bookId) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/books/getBookLoanAvailabilityByBookId',
        "bookId="+bookId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getBooks(search){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/books/searchBooks',
          "name="+search.name+
          "&author="+search. author+
          "&publisher="+search.publisher+
          "&genre="+search.genre,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getAllBooks(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl + '/books/getAllBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTrendyBooks(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl + '/books/getTrendingBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTopRateBooks(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl + '/books/getTopRatedBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
