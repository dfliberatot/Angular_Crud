import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/core/api/services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  articulos:any=[];

  formularioRegistro: FormGroup = this.fb.group({});

  constructor(private articulosService : ControlService,
              private fb: FormBuilder,
              private router: Router,) { }

  ngOnInit(): void {
  }

  formRegistro(): void{

    this.formularioRegistro = this.fb.group({

      id_usuario: new FormControl(null, []),
      correo: new FormControl(null, []),
      nombre: new FormControl(null, []),
      contraseña: new FormControl(null, []),

    })
  }

  get formularioControls(): FormGroup['controls']{
    return this.formularioRegistro.controls;
  }

  registrarUsuario(){
    this.articulosService.insertarArticulosUsingPOST(this.articulos).subscribe((datosArticulos:any)=>{

    })
  }

  vistaLogin(){
    this.router.navigateByUrl('');
  }


}
