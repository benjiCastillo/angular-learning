import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth,private router:Router) { 
    this.isLogged();
  }

  public registro(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public facebookLogin(){
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  public isLogged(){
    return this.angularFireAuth.authState;
  }

  public logOut(){
    this.angularFireAuth.auth.signOut();
    alert("sesion cerrada");
    this.router.navigate(["login"])
  }
}