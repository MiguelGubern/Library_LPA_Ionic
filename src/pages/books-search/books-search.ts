import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BooksSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books-search',
  templateUrl: 'books-search.html',
})
export class BooksSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksSearchPage');
  }

  swipeEvent(e){
    if(e.direction == '2'){
      this.navCtrl.parent.select(3)
    } else if (e.direction == '4'){
      this.navCtrl.parent.select(1);
    }
  }
}
