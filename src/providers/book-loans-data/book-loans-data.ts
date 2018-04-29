import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiUrl} from "../../app/app.module";

/*
  Generated class for the BookLoansDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookLoansDataProvider {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello BookLoansDataProvider Provider');
  }

  createBookLoan(bookId, userId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/book_loans/createBookLoan',
        "bookId="+ bookId +
              "&userId="+ userId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getBookLoansAndBook(userId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/people/getBookLoansAndBookByUserId',
        "userId="+ userId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  returnLoan(loanId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/book_loans/returnBookLoanByBookLoanId',
        "bookLoanId="+loanId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getLoanAvailability(bookId, userId) {
    return new Promise(resolve => {
      this.http.post(apiUrl+'/books/getAvailabilityByBookIdAndUserId',
        "bookId="+bookId +
        "&userId="+userId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getAllUsersWithLoan(bookId) {
    return new Promise(resolve => {
      this.http.post(apiUrl+'/books/getAllUsersWithLoanByBookId',
        "bookId="+bookId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

}
