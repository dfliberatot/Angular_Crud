import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlService, LoginService } from 'src/app/core/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid = true
  //formularioLogin: FormGroup
  formularioLogin: FormGroup = this.fb.group({});

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder,
    //private toastr: ToastrService

    private articulos: ControlService
  ) { }


  registrar_usuario(){
    this.router.navigateByUrl('Registro/');
  }

  ngOnInit(): void {
    this.formLogin()
  }

  formLogin(): void{

    this.formularioLogin = this.fb.group({

      Id: new FormControl(null, []),
      Password: new FormControl(null, [])

    })

  }
  get formularioControls(): FormGroup['controls']{
    return this.formularioLogin.controls;
  }

  validateUser(): void {
    //this.loginValid = true;

    const params = {}  as LoginService.ValidateUserServiceUsingGETParams
    params.id = this.formularioControls.Id.value
    params.password = this.formularioControls.Password.value

    console.log(params);

   this.loginService.validateUserServiceUsingGET(params).subscribe({
     next: (data) =>{

      if(data == 1){
        this.router.navigateByUrl('main');
      }   
     },
     error: () =>{

     }
   })
  }

}
