import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {email:'', name:'', password:'', password_confirmation:''};

  responseData: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
    console.log(this.user);
    if (this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.password_confirmation &&
        this.user.password_confirmation == this.user.password){

      this.authService.createUser(this.user).then(data => {
        this.responseData = data;
        console.log(this.responseData);
        if (this.responseData.type == "Registro#ok") {
          this.navCtrl.pop();
          this.toastCtrl
            .create({message: 'Se ha registrado correctamente. Inicie sesión.',
              duration: 5000,
              cssClass: "toastSuccess",
              position: "top"})
            .present();
        } else {
          this.toastCtrl
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
      this.toastCtrl
        .create({message: 'Please fill all the fields correctly.',
          duration: 3000,
          cssClass: "toastError",
          position: "top"})
        .present();
    }
  }

}
