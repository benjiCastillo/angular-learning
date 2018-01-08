import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LugaresService {
  itemRef: AngularFireObject<any>;
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    // this.itemRef = db.object('lugares');
    
  }

  public getLugares(){
    return this.db.list('lugares').valueChanges();
  }
  // public searchLugar(id){
  //   return this.lugares.filter((lugar)=>{ return lugar.id == id})[0] || null;
  // }
  public guardarLugar(lugar){
    this.db.object('lugares/'+lugar.id).set(lugar);
  }

}
