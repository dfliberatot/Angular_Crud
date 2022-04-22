import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: number = 0;
  password: string = '';

  public loginValid = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.id);
    console.log(this.password);
  }

  public onSubmit(): void {
    this.loginValid = true;

    const params = {}  as LoginService.ValidateUserServiceUsingGETParams
    params.id = this.id
    params.password = this.password

   this.loginService.validateUserServiceUsingGET(params).subscribe({
     next: (data) =>{
       console.log(data);
     }
   })

/*     this._authService.login(this.id, this.password).pipe(
      take(1)
    ).subscribe({
      next: _ => {
        this.loginValid = true;
        this._router.navigateByUrl('/game');
      },
      error: _ => this.loginValid = false
    }); */
  }

}
