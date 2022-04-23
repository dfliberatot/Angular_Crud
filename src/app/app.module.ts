import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './feature/components/login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { SideBarComponent } from './feature/components/side-bar/side-bar.component';
import { BorrarArticuloComponent } from './feature/components/articulos/borrar-articulo/borrar-articulo.component';
import { InfoArticuloComponent } from './feature/components/articulos/info-articulo/info-articulo.component';
import { ModificarArticuloComponent } from './feature/components/articulos/modificar-articulo/modificar-articulo.component';
import { RegistroComponent } from './feature/components/registro/registro.component';
import { AgregarArticuloComponent } from './feature/components/articulos/agregar-articulo/agregar-articulo.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,

    InfoArticuloComponent,
    ModificarArticuloComponent,
    BorrarArticuloComponent,
    AgregarArticuloComponent,
    
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
