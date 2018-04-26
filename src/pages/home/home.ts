import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl:NavController) {

  }

  swipeEvent(e){
    if(e.direction == '2'){
      this.navCtrl.parent.select(1);
    }
  }

}
