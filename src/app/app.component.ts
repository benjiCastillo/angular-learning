import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean = false; 
  email:string = null;


  constructor(private authService:AuthService){
    this.authService.isLogged()
    .subscribe((res)=>{
      if(res && res.uid){
        this.loggedIn = true;
        console.log(res.email);
        this.email = res.email;
      }else{
        this.loggedIn = false;
      }
    }),
    (err)=>{
      this.loggedIn = false;
    }
  }
  logOut(){
    this.authService.logOut();
  }

}
