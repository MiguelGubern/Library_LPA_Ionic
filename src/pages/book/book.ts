import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
