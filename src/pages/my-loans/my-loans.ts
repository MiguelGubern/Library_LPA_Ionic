import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";

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
              private sessionCtrl: SessionControllerProvider) {
    this.getAllUserLoans();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLoansPage');
  }

  getAllUserLoans(){
      this.booksData.getAllUserLoans(this.sessionCtrl.getUser().id)
        .then(data => {
          this.loans = data;
          console.log(this.loans);
        });
  }

  getBookByLoanId(loanId){
    // HAY QUE HACER EL GETBOOKBYLOANID EN SERVER Y BOOKSDATAPROVIDER
    this.booksData.getAllUserLoans(this.sessionCtrl.getUser().id)
      .then(data => {
        console.log(data);
        return data;
      });
  }

  createLoan(){
    for(let loan of this.loans){
      loan["book"] = this.getBookByLoanId(loan.id);
    }
    console.log(this.loans);
  }
}
