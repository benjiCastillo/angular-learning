import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth) { }
  public login(email:string, password:string){
    console.log("login ")
  }
  public registro(email:string, password:string){
     this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).
     then((res)=>{
       alert("user save ");
     })
     .catch((err)=>{
       alert("error")
       console.log(err)
     })
    
  }

}
