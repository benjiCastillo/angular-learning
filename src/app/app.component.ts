import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lugares:Array<any>(
    [
    {nombre:"Donas"},
    {nombre:"Floreria"},
    {nombre:"Panaderia"},
    {nombre:"Perfumeria"},
    {nombre:"Mercado"},
    {nombre:"Naranjas"}
    ]
  );

  constructor(){

  }

}
