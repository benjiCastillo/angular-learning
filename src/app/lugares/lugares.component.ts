import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  lat: number = -19.0434447;
  lng: number = -65.2582972;
  title: string = 'Mi casa';
  zoom: number = 15;
  lugares = null;
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

}
