import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class LugaresService {
  itemRef: AngularFireObject<any>;
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private http: Http) {
    // this.itemRef = db.object('lugares');
    
  }

  public getLugares(){
    return this.db.list('lugares').valueChanges();
  }

  public searchLugar(id){
    return  null;
  }

  public guardarLugar(lugar){
    this.db.object('lugares/'+lugar.id).set(lugar);
  }
  public editarLugar(lugar){
    this.db.object('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeodata(direccion){
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

  public getLugar(id){
    return this.db.object("lugares/"+id).valueChanges();
  }

}
