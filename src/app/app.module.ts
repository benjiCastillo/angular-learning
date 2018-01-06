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

const appRoutes:Routes = [
  {path:'', component:AppComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey:"AIzaSyBgVlUWLUChPSewHkl8el4OGFh7FCX1HaY"  
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
