import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

//google maps
import { AgmCoreModule } from "@agm/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey:"AIzaSyBgVlUWLUChPSewHkl8el4OGFh7FCX1HaY"  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
