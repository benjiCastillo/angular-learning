import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from "@angular/forms";

//google maps
import { AgmCoreModule } from "@agm/core";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes:Routes = [
  {path:'', component:AppComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'crear/:id', component:CrearComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey:"AIzaSyBgVlUWLUChPSewHkl8el4OGFh7FCX1HaY"  
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
