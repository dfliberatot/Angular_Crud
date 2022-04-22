import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './agregar-articulo/agregar-articulo.component';
import { BorrarArticuloComponent } from './borrar-articulo/borrar-articulo.component';
import { InfoArticuloComponent } from './info-articulo/info-articulo.component';
import { ModificarArticuloComponent } from './modificar-articulo/modificar-articulo.component';

const routes: Routes = [
  { path: "agregar", component: AgregarArticuloComponent, pathMatch: "full" },
  { path: "borrar", component: BorrarArticuloComponent, pathMatch: "full" },
  { path: "", component: InfoArticuloComponent, pathMatch: "full" },
  { path: "modificar", component: ModificarArticuloComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
