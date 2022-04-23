import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './feature/components/articulos/agregar-articulo/agregar-articulo.component';
import { BorrarArticuloComponent } from './feature/components/articulos/borrar-articulo/borrar-articulo.component';
import { InfoArticuloComponent } from './feature/components/articulos/info-articulo/info-articulo.component';
import { ModificarArticuloComponent } from './feature/components/articulos/modificar-articulo/modificar-articulo.component';
import { LoginComponent } from './feature/components/login/login.component';
import { RegistroComponent } from './feature/components/registro/registro.component';
import { SideBarComponent } from './feature/components/side-bar/side-bar.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "main", component: SideBarComponent, pathMatch: "full" },

  { path: "agregar", component: AgregarArticuloComponent, pathMatch: "full" },
  { path: "borrar", component: BorrarArticuloComponent, pathMatch: "full" },
  { path: "info", component: InfoArticuloComponent, pathMatch: "full" },
  { path: "modificar", component: ModificarArticuloComponent, pathMatch: "full" },

  //{ path: "Articulos", loadChildren: () => import('./feature/components/articulos/articulos.module').then(m => m.ArticulosModule) },
  { path: "Registro/", component:RegistroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
