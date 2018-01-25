import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
  
export class RegistroComponent implements OnInit {
  registro:any = {};
  constructor(private authServices:AuthService) { 
    
  }
  ngOnInit() {
  }
  registrar(){
    this.authServices.registro(this.registro.email,this.registro.password);
  }
}
