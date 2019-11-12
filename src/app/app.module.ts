import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Partie1Component } from './partie1/partie1.component';
import {FormsModule} from '@angular/Forms';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Partie2Component } from './partie2/partie2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Partie22Component } from './partie22/partie22.component';
import { Ex4Component } from './ex4/ex4.component';
import { Partie3Component } from './partie3/partie3.component';
import { Ex5Component } from './ex5/ex5.component';
import { Ex2nvComponent } from './ex2nv/ex2nv.component';
import { Ex4nvComponent } from './ex4nv/ex4nv.component';
import { Ex1novComponent } from './ex1nov/ex1nov.component';
import { MaterielComponent } from './materiel/materiel.component';
import { MatlComponent } from './materiel/matl/matl.component';
import { MatComponent } from './materiel/mat/mat.component';
import { AmalComponent } from './amal/amal.component';
@NgModule({
  declarations: [
    AppComponent,
    Partie1Component,
    Ex1Component,
    Ex2Component,
    Partie2Component,
    Ex3Component,
    Partie22Component,
    Ex4Component,
    Partie3Component,
    Ex5Component,
    Ex2nvComponent,
    Ex4nvComponent,
    Ex1novComponent,
    MaterielComponent,
    MatlComponent,
    MatComponent,
    AmalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
