import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  public username = Cookie.get('username');
  private clientid = 'b6ad24705c2aad9d4c42';
  private clientsecret = 'a3ce3c17c183a294dc5eb7d7d1e8beb8daea39d9';

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private http:HttpClient) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails)
        }
        else {
          this.userDetails = null;
        }
      }
    );

  }

  public getUser(): any{
    let myResponse = this.http.get('https://api.github.com/users' +'/' + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret) 
    console.log(myResponse);
    return myResponse; 
  }

  signInWithGithub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  public setUserInfoInLocalStorage = (data) =>{
    localStorage.setItem('username', JSON.stringify(data))
  }

  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('username'));
  } 


 
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}