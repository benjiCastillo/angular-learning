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
        opacity:0
      })),
      state('final',style({
        opacity:1
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
  state:string = 'inicial'; 

  constructor(private lugaresServices: LugaresService) {
    lugaresServices.getLugares()
    .subscribe(
      lugares=>{
        this.lugares = lugares;
        console.log(this.lugares)
        this.animar();
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
