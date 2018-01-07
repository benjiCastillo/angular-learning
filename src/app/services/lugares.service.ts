import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {
  lugares:Array<any> =(
    [
    {id:1,plan:"gratuito",active:true,cercania:1,distancia:4,age:22,name:"Donas", description:"sin descripcion todavia"},
    {id:2,plan:"gratuito",active:false,cercania:1,distancia:2,age:22,name:"Floreria",description:"sin descripcion todavia"},
    {id:3,plan:"pagado",active:true,cercania:2,distancia:10,age:22,name:"Panaderia",description:"sin descripcion todavia"},
    {id:4,plan:"gratuito",active:true,cercania:3,distancia:160,age:22,name:"Perfumeria",description:"sin descripcion todavia"},
    {id:5,plan:"pagado",active:true,cercania:1,distancia:90,age:22,name:"Mercado",description:"sin descripcion todavia"},
    {id:6,plan:"gratuito",active:false,cercania:2,distancia:120,age:22,name:"Naranjas",description:"sin descripcion todavia"}
    ]
  );
  constructor() { }

  public getLugares(){
    return this.lugares;
  }
  public searchLugar(id){
    return this.lugares.filter((lugar)=>{ return lugar.id == id})[0] || null;
  }
}
