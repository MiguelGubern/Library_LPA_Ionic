import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {BookPage} from "../book/book";
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {UserProfilePage} from "../user-profile/user-profile";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  allBooks: any;
  trendyBooks: any;
  topRateBooks: any;
  segment:string = "Todos";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public booksDataProvider: BooksDataProvider,
              private loading: LoadingController,
              private sessionCtrl: SessionControllerProvider) {


    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });

    loader.present().then(() => {
      this.getAllBooks();
      this.getTopRateBooks();
      this,this.getTrendyBooks();
      loader.dismiss();
    });
  }

  segmentChange(){
    if (this.segment == "Todos") {
      console.log("TODOSSSS");
    } else if (this.segment == "Trendy"){
      console.log("TRENDYY");
    } else if (this.segment == "TopRate") {
      console.log("TOPRATEEEINSd");
    }
    console.log("asdasdasdads");
  }

  getAllBooks(){
    this.booksDataProvider.getAllBooks()
      .then(data => {
        this.allBooks = data;
        console.log("SIUUUUUU  ", this.allBooks);
      });
  }

  getTrendyBooks(){
    this.booksDataProvider.getTrendyBooks()
      .then(data => {
        this.trendyBooks = data;
        console.log("SIUUUUUU  ", this.trendyBooks);
      })
  }

  getTopRateBooks(){
    this.booksDataProvider.getTopRateBooks()
      .then(data => {
        this.topRateBooks = data;
        console.log("SIUUUUUU  ", this.topRateBooks);
      })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }



  swipeEvent(e){
    if(e.direction == '2'){
      this.navCtrl.parent.select(2)
    } else if (e.direction == '4'){
      this.navCtrl.parent.select(0);
    }
  }

  goToUserProfile(){
    this.navCtrl.push(UserProfilePage);
  }

  goToBook(book){
    this.navCtrl.push(BookPage, book);
  }

}
