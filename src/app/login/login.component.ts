import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private authServices: AuthService, private router:Router) {

  }

  ngOnInit() {
  }
  login() {
    console.log("login")
    let login = this.authServices.login(this.user.email, this.user.password);
    login.
      then((res) => {
        console.log("logueado");
        alert("Usuario Correcto");
        this.router.navigate(['lugares']);
      })
      .catch((err) => {
        alert(err)
        console.log("error")
      })

  }
  facebookLogin(){
    let login = this.authServices.facebookLogin();
    login
    .then((res)=>{
      console.log(res)
      alert("user loggeado con facebook")
      this.router.navigate(['lugares']);
    })
    .catch((err)=>{
      console.log(err)
      alert("error al loguear")
    })
  }

}
