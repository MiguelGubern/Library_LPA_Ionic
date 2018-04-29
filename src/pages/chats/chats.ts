import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatsDataProvider} from "../../providers/chats-data/chats-data";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {ChatPage} from "../chat/chat";

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  chats: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private chatsData: ChatsDataProvider,
              private sessionCtrl: SessionControllerProvider) {
    setInterval(this.getAllChats(), 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }


  getAllChats(){
    this.chatsData.getAllChats(this.sessionCtrl.getUser().id)
      .then( data => {
        this.chats = data;
        console.log(this.chats);
      })
  }

  goToChat(chat){
    this.navCtrl.push(ChatPage, chat)
  }

}
