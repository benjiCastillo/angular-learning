import { Component, OnInit  } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import {trigger,state,style, transition,animate} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations:[
    trigger('contenedorAnimable',[
      state('inicial',style({
        opacity:0,
        backgroundColor: 'rebeccapurple',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final',style({
        opacity:1,
        backgroundColor:'blue',
        transform:'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final',animate(1000)),
      transition('final => inicial',animate(1000)),
    ])
  ]
})
export class LugaresComponent implements OnInit {
  lat: number = -19.0434447;
  lng: number = -65.2582972;
  title: string = 'Mi casa';
  zoom: number = 15;
  lugares = null;
  state:string = 'final'; 

  constructor(private lugaresServices: LugaresService) {
    lugaresServices.getLugares()
    .subscribe(
      lugares=>{
        this.lugares = lugares;
        console.log("bien")
      }, error =>{
        console.log(error)
        console.log("error")
      }
    )
  }

  ngOnInit() {
  }

  animar(){
    this.state = (this.state === 'final')? 'inicial': 'final';
  }
  animacionInicia(e){
    console.log(e);
    console.log("inicia");
  }
  animacionTermina(e){
    console.log(e)
    console.log("termina");
  }

}
