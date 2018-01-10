import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar:any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.getLugar();
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

}
