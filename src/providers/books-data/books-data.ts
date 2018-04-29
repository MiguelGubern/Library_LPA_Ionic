import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiUrl} from "../../app/app.module";

@Injectable()
export class BooksDataProvider {

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


  // getBookByBookLoanId(loanId){
  //   return new Promise(resolve => {
  //     this.http.post(apiUrl+'/book_loans/getBookByBookLoanId',
  //       "bookLoanId="+ loanId,
  //       this.httpOptions)
  //       .subscribe(data => {
  //         resolve(data);
  //       }, (err) => {
  //         console.log(err);
  //       })
  //   })
  // }
  //
  // getDaysLeft(loanId){
  //   return new Promise(resolve => {
  //     this.http.post(apiUrl+'/book_loans/getDaysLeftByBookLoan',
  //       "bookLoanId="+ loanId,
  //       this.httpOptions)
  //       .subscribe(data => {
  //         resolve(data);
  //       }, (err) => {
  //         console.log(err);
  //       })
  //   })
  // }
  //
  //
  // getAllUserLoans(userId){
  //   return new Promise(resolve => {
  //       this.http.post(apiUrl+'/people/getAllUserLoans',
  //         "userId="+ userId,
  //         this.httpOptions)
  //         .subscribe(data => {
  //           resolve(data);
  //         }, (err) => {
  //           console.log(err);
  //         })
  //     })
  //
  // }

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

  getBooks(search){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/books/searchBooks',
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
      this.http.get(apiUrl + '/books/getAllBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTrendyBooks(){
    return new Promise( resolve => {
      this.http.get(apiUrl + '/books/getTrendingBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getTopRateBooks(){
    return new Promise( resolve => {
      this.http.get(apiUrl + '/books/getTopRatedBooks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
