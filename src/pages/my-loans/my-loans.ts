import { Component } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {BookPage} from "../book/book";

/**
 * Generated class for the MyLoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-loans',
  templateUrl: 'my-loans.html',
})
export class MyLoansPage {

  loans: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private booksData: BooksDataProvider,
              private sessionCtrl: SessionControllerProvider,
              private actionSheet: ActionSheetController,
              private alertCtrl: AlertController,
              private toasstCtrl: ToastController) {
    // this.getAllUserLoans();
    this.getLoansInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLoansPage');
  }

  getLoansInfo(){
    this.booksData.getBookLoansAndBook(this.sessionCtrl.getUser().id)
      .then( data => {
        this.loans = data;
        console.log(this.loans);
      });
  }

  presentActionSheet(loan) {
    let actionSheet = this.actionSheet.create({
      title: 'Alquiler: '+ loan.book.name,
      buttons: [
        {
          text: 'Devolver libro',
          role: 'destructive',
          handler: () => {
            this.showConfirm(loan);
            console.log('Dclicked');
          }
        },{
          text: "Ir al libro",
          handler: () => {
            this.goToBook(loan.book);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showConfirm(loan) {
    let confirm = this.alertCtrl.create({
      message: "Está seguro que quiere devolver: " + loan.book.name + "?",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Devolver',
          handler: () => {
            this.returnLoan(loan);
          }
        }
      ]
    });
    confirm.present();
  }

  returnLoan(loan){
    this.booksData.returnLoan(loan.bookLoanId)
      .then( data => {
        let response: any;
        response = data;
        this.toasstCtrl.create({message: response.message,
          duration: 3000,
          position: "top"})
          .present();
        this.getLoansInfo();
      })
  }

  goToBook(book){
    this.navCtrl.push(BookPage, book);
  }


  // getAllUserLoans(){
  //     this.booksData.getAllUserLoans(this.sessionCtrl.getUser().id)
  //       .then(data => {
  //         this.loans = data;
  //         console.log(this.loans);
  //         this.createLoan();
  //       });
  // }

  // getBookByLoanId(loanId){
  //   this.booksData.getBookByBookLoanId(loanId)
  //     .then(data => {
  //       console.log("GETBOOKBYLOANID", data);
  //     });
  // }

  // getTimeLeftOfLoan(loanId){
  //   // HAY QUE HACER EL GETBOOKBYLOANID EN SERVER Y BOOKSDATAPROVIDER
  //   this.booksData.getAllUserLoans(this.sessionCtrl.getUser().id)
  //     .then(data => {
  //       console.log(data);
  //       return data;
  //     });
  // }

//   createLoan(){
//     for(let loan of this.loans){
//       loan["book"] = this.getBookByLoanId(loan.id);
//
//
//       // loan["timeLeft"] = this.getTimeLeftOfLoan(loan.id);
//     }
//     console.log("CREATE LOANS: ", this.loans);
//   }
}
