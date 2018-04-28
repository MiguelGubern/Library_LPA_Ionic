import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SessionControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionControllerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SessionControllerProvider Provider');
  }

  isLogged(){
    return !!localStorage.getItem("user");
  }

  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

  logIn(user){
    localStorage.setItem("user", JSON.stringify(user));
  }

  logOut(){
    localStorage.removeItem("user");
  }

}
