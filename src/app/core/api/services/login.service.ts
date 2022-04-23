/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Usuario } from '../models/usuario';

/**
 * Login Controller
 */
@Injectable({
  providedIn: 'root',
})
class LoginService extends __BaseService {
  static readonly registerUserUsingPOSTPath = '/login/registerUser';
  static readonly validateUserServiceUsingGETPath = '/login/validateUser';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Registrar usuario
   * @param user user
   * @return OK
   */
  registerUserUsingPOSTResponse(user: Usuario): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/login/registerUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * Registrar usuario
   * @param user user
   * @return OK
   */
  registerUserUsingPOST(user: Usuario): __Observable<boolean> {
    return this.registerUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * validar el usuario
   * @param params The `LoginService.ValidateUserServiceUsingGETParams` containing the following parameters:
   *
   * - `password`: password
   *
   * - `id`: id
   *
   * @return OK
   */
  validateUserServiceUsingGETResponse(params: LoginService.ValidateUserServiceUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.password != null) __params = __params.set('password', params.password.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/login/validateUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * validar el usuario
   * @param params The `LoginService.ValidateUserServiceUsingGETParams` containing the following parameters:
   *
   * - `password`: password
   *
   * - `id`: id
   *
   * @return OK
   */
  validateUserServiceUsingGET(params: LoginService.ValidateUserServiceUsingGETParams): __Observable<number> {
    return this.validateUserServiceUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module LoginService {

  /**
   * Parameters for validateUserServiceUsingGET
   */
  export interface ValidateUserServiceUsingGETParams {

    /**
     * password
     */
    password: string;

    /**
     * id
     */
    id: number;
  }
}

export { LoginService }
