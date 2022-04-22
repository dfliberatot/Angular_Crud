import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { InfoArticuloComponent } from './info-articulo/info-articulo.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';
import { BorrarArticuloComponent } from './borrar-articulo/borrar-articulo.component';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';


@NgModule({
  declarations: [
    InfoArticuloComponent,
    ModificarArticuloComponent,
    BorrarArticuloComponent,
    AgregarArticuloComponent,

  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }
