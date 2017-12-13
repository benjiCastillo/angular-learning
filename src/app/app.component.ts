import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ;
  name:string;
  listo:boolean ;

  constructor(){
    this.title = "Angular";
    this.name = "Benji";
    this.listo = false;
    setTimeout(() => {
      this.listo = true;
    }, 100);

  }
  maker(){
    alert("hacer");
  }

}
