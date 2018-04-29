import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {ChatsDataProvider} from "../../providers/chats-data/chats-data";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  chatId:any;
  messages: any;
  toUser: any;
  user:any;

  newMessage = '';

  @ViewChild(Content) content:Content;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sessionCtrl: SessionControllerProvider,
              private chatsData: ChatsDataProvider) {
    this.user = this.sessionCtrl.getUser();
    this.toUser = this.navParams.data.toUser;
    this.chatId = this.navParams.data.chatId;
    console.log("CHAT ID: ", this.chatId);
    this.getAllMessages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  ionViewDidEnter(){
    this.content.scrollToBottom(300);
  }

  sendMessage() {
    if (this.newMessage){
      this.chatsData.sendChatMessage(this.chatId, this.user.id, this.newMessage)
        .then(data => {
          this.getAllMessages();
          this.newMessage = '';
        })
    }
  }

  getAllMessages(){
    this.chatsData.getAllMessages(this.chatId)
      .then( data =>{
        this.messages = data;
        this.content.scrollToBottom(300);
      })
  }
}
