import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lugares:Array<any>(
    [
    {active:true,age:22,name:"Donas"},
    {active:false,age:22,name:"Floreria"},
    {active:true,age:22,name:"Panaderia"},
    {active:true,age:22,name:"Perfumeria"},
    {active:true,age:22,name:"Mercado"},
    {active:false,age:22,name:"Naranjas"}
    ]
  );

  constructor(){

  }

}
