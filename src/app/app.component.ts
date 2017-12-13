import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number;
  lng:number;
  zoom:number;
  latMarker:number;
  lngMarker:number;
  title:string;
  markerN:Object ={};
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

  markers:Array<any>([
    {title:"lugar1",lat:-19.0464192,lng:-65.2560251},
    {title:"lugar2",lat:-19.0445836,lng:-65.256862},
    {title:"lugar3",lat:-19.0449198,lng:-65.2593355}
  ]);

  constructor(){
    this.lat = -19.0464192;
    this.lng = -65.2560251;
    this.zoom = 15;

  }

  insertMarker(){
    this.markers.push(this.markerN);
    console.log(this.markers);
    alert("success");
  }

}
