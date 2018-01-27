import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private authServices: AuthService) {

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
      })
      .catch((err) => {
        alert(err)
        console.log("error")
      })

  }
}
