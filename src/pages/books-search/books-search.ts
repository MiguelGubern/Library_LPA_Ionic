import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {BookPage} from "../book/book";
import {GenresDataProvider} from "../../providers/genres-data/genres-data";


@IonicPage()
@Component({
  selector: 'page-books-search',
  templateUrl: 'books-search.html',
})
export class BooksSearchPage {

  books:any;
  bookSearch = {name:'', author:'', publisher:'', genre:''}

  genres: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public bookDataProvider: BooksDataProvider,
              public genresDataProvider: GenresDataProvider) {
    this.getAllGenres();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksSearchPage');
  }

  buscar(){
    console.log(this.bookSearch);
    this.bookDataProvider.getBooks(this.bookSearch)
      .then(data => {
        this.books = data;
        console.log(this.books);
      });
  }

  getAllGenres(){
    this.genresDataProvider.getAllGenres()
      .then(data => {
        this.genres = data;
        console.log("SIUUUUUU  ", this.genres);
      })
  }

  goToBook(book){
    this.navCtrl.push(BookPage, book);
  }

  swipeEvent(e){
    if(e.direction == '4'){
      this.navCtrl.parent.select(1)
    }
  }
}
