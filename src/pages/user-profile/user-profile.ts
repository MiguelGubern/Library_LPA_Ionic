import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SessionControllerProvider} from "../../providers/session-controller/session-controller";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sessionCtrl: SessionControllerProvider,
              private toastCtrl: ToastController) {
    this.user = sessionCtrl.getUser();
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  logOut(){
    this.sessionCtrl.logOut();
    this.toastCtrl.create({
      message: "Ha cerrado sesión correctamente.",
      duration: 3000,
      cssClass: "toastSuccess",
      position: "top"})
      .present();
    this.navCtrl.pop();
  }

}
