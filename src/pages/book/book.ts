import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GenresDataProvider} from "../../providers/genres-data/genres-data";
import {BooksDataProvider} from "../../providers/books-data/books-data";

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  book: any;
  genres: any;
  availability: any;

  /** Peticiones pendientes
   *    /books/getLoanAvailabilityByBookId => {loanCount:num, bookItemsCount:num}
   *
   *    /books/getAllUserLoans
   *
   *    /books/getAllUsersWithLoanByBookId (not implemented)
   *    /book_items/getBookByBookItemId (not implemented)
   */

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public genresDataProvider: GenresDataProvider,
              public booksData: BooksDataProvider) {
    this.book = navParams.data;
    this.getBookGenres();
    this.getLoanAvailability();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

  getBookGenres(){
    this.genresDataProvider.getBookGenres(this.book.id)
      .then(data => {
        this.genres = data;
        console.log(this.genres);
      })
  }

  getLoanAvailability(){
    this.booksData.getLoanAvailability(this.book.id)
      .then(data => {
        this.availability = data;
      })
  }

}
