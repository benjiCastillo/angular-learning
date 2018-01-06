import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  lat:number = -19.0434447;
  lng:number = -65.2582972;
  title:string = 'Mi casa';
  zoom:number = 15;
  
  lugares:Array<any> =(
    [
    {id:1,active:true,age:22,name:"Donas"},
    {id:2,active:false,age:22,name:"Floreria"},
    {id:3,active:true,age:22,name:"Panaderia"},
    {id:4,active:true,age:22,name:"Perfumeria"},
    {id:5,active:true,age:22,name:"Mercado"},
    {id:6,active:false,age:22,name:"Naranjas"}
    ]
  );

  constructor() { }

  ngOnInit() {
  }

}
