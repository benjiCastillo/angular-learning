import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate{

  loggedIn:boolean = false; 
  constructor(private authService:AuthService){
    this.authService.isLogged()
    .subscribe((res)=>{
      if(res && res.uid){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    }),
    (err)=>{
      this.loggedIn = false;
    }
  }

  canActivate(){
    return this.loggedIn;
  }

}
