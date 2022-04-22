import { Component, OnInit, ViewChild } from '@angular/core';
import { articuloModel } from './model/Articulo';
import { ArticulosService } from './services/articulos.service';

import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ejemplo Crud';

/*   articulos:any=[];
  articulos2:any; */


  //esto se utiliza en representacion del modelo
 /*  art={
    codigo:null,
    descripcion:null,
    precio:null
  } */


  
/*   displayedColumns: string[] = ['id', 'descripcion', 'precio'];
  columnas = [
    {titulo: "IdProducto", name: "id"},
    {titulo: "Descripcion", name: "descripcion"},
    {titulo: "Precio", name: "precio"}
  ] */



 

  constructor(private articulosService: ArticulosService ){}

  ngOnInit(){

    //this.recuperarArticulos();

  }

 /*  recuperarArticulos(){
    this.articulosService.recuperarArticulos().subscribe((dataArticulo:any) => {
      this.articulos = dataArticulo
    })
  }


 
  guardarArticulo(){

    /* 
    this.articulosService.agregarArticulo(this.art).subscribe(() => {
      this.recuperarArticulos()
    })
    
     this.articulosService.agregarArticulo(this.art).subscribe(datos => {
      alert("Se agergo con exito");
      this.recuperarArticulos();
    }) 
   

    this.articulosService.agregarArticulo(this.art).subscribe(() => this.recuperarArticulos());
    this.art.descripcion = null;
    this.art.precio = null;

  }  
  //@ViewChild(MatTable) tabla1!: MatTable<art>;

  eliminarArticulo(codigo:number){
    this.articulosService.eliminarArticulo(codigo).subscribe(() => this.recuperarArticulos());
  }


  actualizarArticulo(){
    this.articulosService.agregarArticulo(this.art).subscribe(() => this.recuperarArticulos());
  }

  seleccionarArticulo(codigo:number){
    this.articulosService.seleccionarArticulo(codigo).subscribe(dataArticulo => this.articulos2 = dataArticulo);
    console.log(this.articulos2)

  } */


}
