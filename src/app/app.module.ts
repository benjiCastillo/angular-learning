import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

const appRoutes:Routes = [
  {path:'', component:AppComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'contacto', component:ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey:"AIzaSyBgVlUWLUChPSewHkl8el4OGFh7FCX1HaY"  
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
