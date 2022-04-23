import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';
import { RegistroComponent } from './feature/components/registro/registro.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "Articulos/", loadChildren: () => import('./feature/components/articulos/articulos.module').then(m => m.ArticulosModule) },
  { path: "Registro/", component:RegistroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
