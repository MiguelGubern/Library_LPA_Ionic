import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BooksDataProvider} from "../../providers/books-data/books-data";
import {BookLoansDataProvider} from "../../providers/book-loans-data/book-loans-data";
import {ChatsDataProvider} from "../../providers/chats-data/chats-data";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {ChatPage} from "../chat/chat";

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
              private bookLoansData: BookLoansDataProvider,
              private chatsData: ChatsDataProvider,
              private sessionCtrl: SessionControllerProvider,
              private alertCtrl: AlertController) {
    this.book = this.navParams.data;
    this.getAllUserWithLoan();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPopoverPage');
  }

  getAllUserWithLoan(){
    this.bookLoansData.getAllUsersWithLoan(this.book.id)
      .then(data => {
        this.users = JSON.parse(JSON.stringify(data));
        console.log("asd", this.users);
      })
  }

  startConversation(toUser){
    this.chatsData.startConversation(this.sessionCtrl.getUser().id, toUser.id)
      .then(data => {
        console.log(data);
        this.goToChat(data);
      })
  }

  goToChat(data){
    this.navCtrl.push(ChatPage, data);
  }

  showConfirm(user) {
    let confirm = this.alertCtrl.create({
      message: "Está seguro que quiere hablar con: " + user.name + "?",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.startConversation(user);
          }
        }
      ]
    });
    confirm.present();
  }


}
