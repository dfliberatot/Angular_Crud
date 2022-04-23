import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/core/api/services';

@Component({
  selector: 'app-info-articulo',
  templateUrl: './info-articulo.component.html',
  styleUrls: ['./info-articulo.component.css']
})
export class InfoArticuloComponent implements OnInit {


  articulos:any=[];

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
