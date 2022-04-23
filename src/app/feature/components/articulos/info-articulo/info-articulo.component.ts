import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/core/api/models/articulo';
import { ControlService } from 'src/app/core/api/services';


@Component({
  selector: 'app-info-articulo',
  templateUrl: './info-articulo.component.html',
  styleUrls: ['./info-articulo.component.css']
})
export class InfoArticuloComponent implements OnInit {



  articulos:any=[];
  displayedColumns: string[] = ['id_articulo', 'descripcion', 'precio']
  
  columnas = [
    {titulo: "ID", name: "id_articulo"},
    {titulo: "Descripcion", name: "descripcion"},
    {titulo: "Precio" ,name: "precio"}
  ]
  

  constructor( private articulosService : ControlService) { }

  ngOnInit(): void {
    this.recuperarArticulos()
  }

  recuperarArticulos(){
    this.articulosService.listarArticulosUsingGET().subscribe((dataArticulo : any) => {
      this.articulos = dataArticulo;      
    })
    
  
  
  }

}
