import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar:any = {};
  id:any = null;
  results$: Observable<any>;
  private searchField:FormControl;

  constructor(private lugaresService: LugaresService, private route:ActivatedRoute, private http: Http) {
    this.id = this.route.snapshot.params['id'];
    this.getLugar();
    const URL = "https://maps.google.com/maps/api/geocode/json";
    this.searchField = new FormControl();
    //cada que el valor cambia searchfield reacciona a los cambio
    // switchmap le pasamos los cambios en el query, y se realiza la
    //lamada http , nos regresa la mapeamos a json
    // mapeamos los  results
    this.results$ = this.searchField.valueChanges
    .debounceTime(500)  
    .switchMap(query=>
        this.http.get(`${URL}?address=${query}`)
      )
      .map(res => res.json())
      .map(res => res.results);
   }
  //Calle 72 9-55
  ngOnInit() {
  }

  guardarLugar(){
    var direccion = this.lugar.calle+","+this.lugar.ciudad+","+this.lugar.pais;
    this.lugaresService.obtenerGeodata(direccion)
    .subscribe(
      data=>{

        if(this.id != 'new'){
          this.lugaresService.editarLugar(this.lugar)
          alert("Editado");
        }else{
          this.lugar.lat = data.json().results[0].geometry.location.lat;
          this.lugar.lng = data.json().results[0].geometry.location.lng;
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert("insertado")
        }
        
      },
      err => {
        console.log(err);

      }
    );
  }

  getLugar(){
    if(this.id != 'new'){
      this.lugaresService.getLugar(this.id)
        .subscribe(
          (data)=>{ this.lugar = data;console.log(data) },
          (err)=>{ console.log(err)}

        )
    }
  }

  getAdress(res){
    console.log(res);
    this.lugar.calle = res.address_components[1].long_name+" "+res.address_components[0].long_name;
    this.lugar.ciudad = res.address_components[4].long_name;
    this.lugar.pais = res.address_components[6].long_name;
  }

}
