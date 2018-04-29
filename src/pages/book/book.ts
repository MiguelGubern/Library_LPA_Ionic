import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {GenresDataProvider} from "../../providers/genres-data/genres-data";
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {UsersPopoverPage} from "../users-popover/users-popover";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {MyLoansPage} from "../my-loans/my-loans";

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
  availability = {loanCount: 0, bookItemsCount: 0, gotIt: 0};

  /** Peticiones pendientes
   *    /books/getLoanAvailabilityByBookId => {loanCount:num, bookItemsCount:num}
   *
   *    /books/getAllUserLoans
   *
   *    /books/getAllUsersWithLoanByBookId
   *    /book_items/getBookByBookItemId (not implemented)
   */

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public genresDataProvider: GenresDataProvider,
              public booksData: BooksDataProvider,
              private popoverCtrl: PopoverController,
              private sessionCtrl: SessionControllerProvider) {
    this.book = navParams.data;
    this.getBookGenres();
    if (sessionCtrl.isLogged()){
      this.getLoanAvailability();
    }
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
    this.booksData.getLoanAvailability(this.book.id, this.sessionCtrl.getUser().id)
      .then(data => {
        this.availability = JSON.parse(JSON.stringify(data));
        console.log("asd", this.availability);
      })
  }

  seeUsers(e){
    this.popoverCtrl.create(UsersPopoverPage, this.book).present({
      ev: e
    });
  }

  goToMyLoans(){
    this.navCtrl.push(MyLoansPage);
  }
}
