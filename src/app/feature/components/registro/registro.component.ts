import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
              private router: Router,) { }

  ngOnInit(): void {
  }

  formRegistro(): void{

    this.formularioRegistro = this.fb.group({

      Id: new FormControl(null, []),
      Password: new FormControl(null, [])

    })
  }

  registrarUsuario(){

  }

  vistaLogin(){
    this.router.navigateByUrl('');
  }


}
