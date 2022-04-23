import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Articulo } from 'src/app/core/api/models';
import { ControlService } from 'src/app/core/api/services';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  formularioAgregar: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private articulo: ControlService
  ) { }

  ngOnInit(): void {
  }

  formLogin(): void{

    this.formularioAgregar = this.fb.group({

      descripcion: new FormControl(null, []),
      precio: new FormControl(null, [])

    })

  }
  get formularioControls(): FormGroup['controls']{
    return this.formularioAgregar.controls;
  }

  agregarArticulo(): void {
    //this.loginValid = true;

    const params = {}  as Articulo
    params.descripcion = this.formularioControls.descripcion.value
    params.precio = this.formularioControls.precio.value

    console.log(params);

   this.articulo.insertarArticulosUsingPOST(params).subscribe({
     next: (data) =>{
       console.log(data);
       
     }
   })
  }

}
