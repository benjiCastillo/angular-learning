import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  public registro(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    //  then((res)=>{
    //    alert(res);
    //  })
    //  .catch((err)=>{
    //    alert("error")
    //    console.log(err)
    //  }) 
  }

  public login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}