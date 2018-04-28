import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl = 'http://192.168.10.2:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  /** Model
     * name
     * password
     * picture
     * email
   *
   * /users/log_in
   */


  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }


  createUser(userData){
    return new Promise( resolve => {
      this.http.post(this.apiUrl + '/people/register',
        "email="+userData.email+
              "&name="+userData.name+
              "&password="+Md5.hashStr(userData.password),
      this.httpOptions)
        .subscribe( data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  login(userData){
    return new Promise( resolve => {
      this.http.post(this.apiUrl + '/people/log_in',
        "email="+userData.email+
        "&password="+ Md5.hashStr(userData.password),
        this.httpOptions)
        .subscribe( data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

}
