import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "Articulos/", loadChildren: () => import('./feature/components/articulos/articulos.module').then(m => m.ArticulosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
