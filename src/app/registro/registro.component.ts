import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
  
export class RegistroComponent implements OnInit {
  registro:any = {};
  constructor(private authServices:AuthService, private router:Router) { 
    
  }
  ngOnInit() {
  }
  registrar(){
   // this.authServices.registro(this.registro.email,this.registro.password);
    let login = this.authServices.registro(this.registro.email,this.registro.password);
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
}
