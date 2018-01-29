import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

//google maps
import { AgmCoreModule } from "@agm/core";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';
import { LinksPipe } from './pipes/links.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './services/auth.service';
import  {GuardService} from './services/guard.service';
const appRoutes:Routes = [
  {path:'', component:LugaresComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'crear/:id', component:CrearComponent,canActivate:[GuardService]},
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinksPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
    apiKey:"AIzaSyBgVlUWLUChPSewHkl8el4OGFh7FCX1HaY"  
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LugaresService,AuthService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
