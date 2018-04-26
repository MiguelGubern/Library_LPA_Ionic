import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {BookPage} from "../book/book";
import {BooksDataProvider} from "../../providers/books-data/books-data";

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  books = [{
    id:1,
    img:"assets/imgs/libro.jpg",
    name:"Los Pantanos Colorados",
    author:"Juan Ignacio López",
    description:"Libraco no máas",
    rate: 7.3,
    stock:3
  },{
    id:2,
    img:"assets/imgs/libro.jpg",
    name:"Mi Vida Secreta",
    author:"Anabel Alcantara",
    description:"Libraco no máas",
    rate: 6.9,
    stock:1
  },{
    id:3,
    img:"assets/imgs/libro.jpg",
    name:"Introducción al Cubo",
    author:"Aitor Tilla",
    description:"Libraco no máas",
    rate: 8.0,
    stock:0
  },{
    id:4,
    img:"assets/imgs/libro.jpg",
    name:"Cuando me perdí en mi casa",
    author:"Fernando Guanarteme",
    description:"Libraco no máas",
    rate: 4.6,
    stock:0
  },{
    id:5,
    img:"assets/imgs/libro.jpg",
    name:"Guía Socio Cultural de la Antártida",
    author:"Bear Grills",
    description:"Libraco no máas",
    rate: 10,
    stock:2
  },{
    id:1,
    img:"assets/imgs/libro.jpg",
    name:"Los Pantanos Colorados",
    author:"Juan Ignacio López",
    description:"Libraco no máas",
    rate: 7.3,
    stock:3
  },{
    id:2,
    img:"assets/imgs/libro.jpg",
    name:"Mi Vida Secreta",
    author:"Anabel Alcantara",
    description:"Libraco no máas",
    rate: 6.9,
    stock:1
  },{
    id:3,
    img:"assets/imgs/libro.jpg",
    name:"Introducción al Cubo",
    author:"Aitor Tilla",
    description:"Libraco no máas",
    rate: 8.0,
    stock:0
  },{
    id:4,
    img:"assets/imgs/libro.jpg",
    name:"Cuando me perdí en mi casa",
    author:"Fernando Guanarteme",
    description:"Libraco no máas",
    rate: 4.6,
    stock:0
  },{
    id:5,
    img:"assets/imgs/libro.jpg",
    name:"Guía Socio Cultural de la Antártida",
    author:"Bear Grills",
    description:"Libraco no máas",
    rate: 10,
    stock:2
  },{
    id:1,
    img:"assets/imgs/libro.jpg",
    name:"Los Pantanos Colorados",
    author:"Juan Ignacio López",
    description:"Libraco no máas",
    rate: 7.3,
    stock:3
  },{
    id:2,
    img:"assets/imgs/libro.jpg",
    name:"Mi Vida Secreta",
    author:"Anabel Alcantara",
    description:"Libraco no máas",
    rate: 6.9,
    stock:1
  },{
    id:3,
    img:"assets/imgs/libro.jpg",
    name:"Introducción al Cubo",
    author:"Aitor Tilla",
    description:"Libraco no máas",
    rate: 8.0,
    stock:0
  },{
    id:4,
    img:"assets/imgs/libro.jpg",
    name:"Cuando me perdí en mi casa",
    author:"Fernando Guanarteme",
    description:"Libraco no máas",
    rate: 4.6,
    stock:0
  },{
    id:5,
    img:"assets/imgs/libro.jpg",
    name:"Guía Socio Cultural de la Antártida",
    author:"Bear Grills",
    description:"Libraco no máas",
    rate: 10,
    stock:2
  },{
    id:1,
    img:"assets/imgs/libro.jpg",
    name:"Los Pantanos Colorados",
    author:"Juan Ignacio López",
    description:"Libraco no máas",
    rate: 7.3,
    stock:3
  },{
    id:2,
    img:"assets/imgs/libro.jpg",
    name:"Mi Vida Secreta",
    author:"Anabel Alcantara",
    description:"Libraco no máas",
    rate: 6.9,
    stock:1
  },{
    id:3,
    img:"assets/imgs/libro.jpg",
    name:"Introducción al Cubo",
    author:"Aitor Tilla",
    description:"Libraco no máas",
    rate: 8.0,
    stock:0
  },{
    id:4,
    img:"assets/imgs/libro.jpg",
    name:"Cuando me perdí en mi casa",
    author:"Fernando Guanarteme",
    description:"Libraco no máas",
    rate: 4.6,
    stock:0
  },{
    id:5,
    img:"assets/imgs/libro.jpg",
    name:"Guía Socio Cultural de la Antártida",
    author:"Bear Grills",
    description:"Libraco no máas",
    rate: 10,
    stock:2
  },{
    id:1,
    img:"assets/imgs/libro.jpg",
    name:"Los Pantanos Colorados",
    author:"Juan Ignacio López",
    description:"Libraco no máas",
    rate: 7.3,
    stock:3
  },{
    id:2,
    img:"assets/imgs/libro.jpg",
    name:"Mi Vida Secreta",
    author:"Anabel Alcantara",
    description:"Libraco no máas",
    rate: 6.9,
    stock:1
  },{
    id:3,
    img:"assets/imgs/libro.jpg",
    name:"Introducción al Cubo",
    author:"Aitor Tilla",
    description:"Libraco no máas",
    rate: 8.0,
    stock:0
  },{
    id:4,
    img:"assets/imgs/libro.jpg",
    name:"Cuando me perdí en mi casa",
    author:"Fernando Guanarteme",
    description:"Libraco no máas",
    rate: 4.6,
    stock:0
  },{
    id:5,
    img:"assets/imgs/libro.jpg",
    name:"Guía Socio Cultural de la Antártida",
    author:"Bear Grills",
    description:"Libraco no máas",
    rate: 10,
    stock:2
  }];

  booksData: any;
  segment:string = "Todos";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public booksDataProvider: BooksDataProvider) {
    this.getBooks();
  }

  getBooks(){
    this.booksDataProvider.getBooks()
      .then(data => {
        this.booksData = data;
        console.log("SIUUUUUU  ", this.booksData);
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

  goToBook(book){
    this.navCtrl.push(BookPage, book);
  }

}
