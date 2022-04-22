import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articuloModel} from '../model/Articulo'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='http://localhost:8080/articulos/'

  constructor(private http: HttpClient) { }


  recuperarArticulos(){
    return this.http.get(`${this.url}listarArticulos`)
  }

  actualizarArticulo(articulo:any){
    return this.http.put(`${this.url}actualizarArticulo`, articulo)
  }

  agregarArticulo(articulo:any){
    return this.http.post<any[]>(`${this.url}insertarArticulos`,articulo);
    
  }

  eliminarArticulo(idArticulo:number){
    return this.http.delete(`${this.url}eliminarArticulos/ ${idArticulo}`);
  }

  seleccionarArticulo(idArticulo:number){
    return this.http.get(`${this.url}seleccionarArticulos/ ${idArticulo}`)
  }


}
