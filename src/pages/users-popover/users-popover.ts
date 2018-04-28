import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BooksDataProvider} from "../../providers/books-data/books-data";

/**
 * Generated class for the UsersPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-popover',
  templateUrl: 'users-popover.html',
})
export class UsersPopoverPage {

  users: any;
  book: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private booksData: BooksDataProvider) {
    this.book = this.navParams.data;
    this.getAllUserWithLoan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPopoverPage');
  }

  getAllUserWithLoan(){
    this.booksData.getAllUsersWithLoan(this.book.id)
      .then(data => {
        this.users = JSON.parse(JSON.stringify(data));
        console.log("asd", this.users);
      })
  }

}
