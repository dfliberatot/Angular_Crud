/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Articulo } from '../models/articulo';
import { OptionalArticulo } from '../models/optional-articulo';

/**
 * Control
 */
@Injectable({
  providedIn: 'root',
})
class ControlService extends __BaseService {
  static readonly actualizarArticuloUsingPUTPath = '/articulos/actualizarArticulo';
  static readonly eliminarArticuloUsingDELETEPath = '/articulos/eliminarArticulos/{id}';
  static readonly insertarArticulosUsingPOSTPath = '/articulos/insertarArticulos';
  static readonly listarArticulosUsingGETPath = '/articulos/listarArticulos';
  static readonly seleccionarArticuloUsingGETPath = '/articulos/seleccionarArticulos/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * actualizarArticulo
   * @param articulo articulo
   */
  actualizarArticuloUsingPUTResponse(articulo: Articulo): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = articulo;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/articulos/actualizarArticulo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * actualizarArticulo
   * @param articulo articulo
   */
  actualizarArticuloUsingPUT(articulo: Articulo): __Observable<null> {
    return this.actualizarArticuloUsingPUTResponse(articulo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * eliminarArticulo
   * @param id id
   */
  eliminarArticuloUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/articulos/eliminarArticulos/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * eliminarArticulo
   * @param id id
   */
  eliminarArticuloUsingDELETE(id: number): __Observable<null> {
    return this.eliminarArticuloUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * insertarArticulos
   * @param articulo articulo
   */
  insertarArticulosUsingPOSTResponse(articulo: Articulo): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = articulo;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/articulos/insertarArticulos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * insertarArticulos
   * @param articulo articulo
   */
  insertarArticulosUsingPOST(articulo: Articulo): __Observable<null> {
    return this.insertarArticulosUsingPOSTResponse(articulo).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * listarArticulos
   * @return OK
   */
  listarArticulosUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Articulo>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articulos/listarArticulos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Articulo>>;
      })
    );
  }
  /**
   * listarArticulos
   * @return OK
   */
  listarArticulosUsingGET(): __Observable<Array<Articulo>> {
    return this.listarArticulosUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Articulo>)
    );
  }

  /**
   * seleccionarArticulo
   * @param id id
   * @return OK
   */
  seleccionarArticuloUsingGETResponse(id: number): __Observable<__StrictHttpResponse<OptionalArticulo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articulos/seleccionarArticulos/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OptionalArticulo>;
      })
    );
  }
  /**
   * seleccionarArticulo
   * @param id id
   * @return OK
   */
  seleccionarArticuloUsingGET(id: number): __Observable<OptionalArticulo> {
    return this.seleccionarArticuloUsingGETResponse(id).pipe(
      __map(_r => _r.body as OptionalArticulo)
    );
  }
}

module ControlService {
}

export { ControlService }
