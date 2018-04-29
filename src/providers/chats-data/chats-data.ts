import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiUrl} from "../../app/app.module";

/*
  Generated class for the ChatsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatsDataProvider {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient) {
    console.log('Hello ChatsDataProvider Provider');
  }


  startConversation(userId, toUserId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/chats/getChatWithUserId',
        "creatorId="+userId+
        "&receiverId="+toUserId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getAllChats(userId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/chats/getAllChatsByUserId',
        "userId="+userId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  sendChatMessage(chatId, userId, message){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/messages/sendChatMessageToUserId',
        "chatId="+chatId+
        "&userId="+userId+
        "&message="+message,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getAllMessages(chatId){
    return new Promise(resolve => {
      this.http.post(apiUrl+'/messages/getAllMessagesByChatId',
        "chatId="+chatId,
        this.httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

}
