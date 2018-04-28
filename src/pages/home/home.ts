import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignUpPage} from "../sign-up/sign-up";
import {UserProfilePage} from "../user-profile/user-profile";
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";
import {ChatsPage} from "../chats/chats";
import {MyLoansPage} from "../my-loans/my-loans";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   items = [
    "Hola",
    "Mundo",
    "Esto",
    "Funciona"
  ];

  constructor(public navCtrl:NavController,
              public sessionCtrl:SessionControllerProvider) {
  }

  ionViewDidLoad(){
    localStorage.removeItem("user");
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad HomePage');
    console.log("USUARIO:");
    console.log(JSON.parse(localStorage.getItem("user")));
    console.log(this.sessionCtrl.isLogged());
    console.log(this.sessionCtrl.getUser());

  }

  swipeEvent(e){
    if(e.direction == '2'){
      this.navCtrl.parent.select(1);
    }
  }

  goToChats(){
    this.navCtrl.push(ChatsPage);
  }

  goToReservations(){
    this.navCtrl.push(LoginPage);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToUserProfile() {
    this.navCtrl.push(UserProfilePage);
  }

  goToMyLoans(){
    this.navCtrl.push(MyLoansPage);
  }

}


