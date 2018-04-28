import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {email:'', password:''};

  responseData: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.user.email && this.user.password) {
      this.authService.login(this.user).then(data => {
        this.responseData = data;
        console.log(this.responseData);
        if (this.responseData.email) {
          localStorage.setItem("user", JSON.stringify(this.responseData));
          this.navCtrl.pop();
          this.toastController
            .create({message: "Bienvenido/a " + this.responseData.name,
              duration: 3000,
              cssClass: "toastSuccess",
              position: "top"})
            .present();
        } else {
          this.toastController
            .create({message: this.responseData.message,
              duration: 3000,
              cssClass: "toastError",
              position: "top"})
            .present();
        }
      }, (err) => {
        console.log("ERROR: ", err);

      });
    } else {
      this.toastController
        .create({message: "Introduzca nombre y contraseña",
          duration: 3000,
          cssClass: "toastError",
          position: "top"})
        .present();
    }
  }

}
