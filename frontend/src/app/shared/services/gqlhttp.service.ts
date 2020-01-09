import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { Solicitud } from '../../models/solicitud';
import { Reportero } from '../../models/reportero';
import { Categoria } from '../../models/categoria';

export type Endpoints = 'solicitud' | 'reportero' | 'categoria';
type Interfaces = Solicitud | Reportero | Categoria;

const categoria = "{ _id, ppp, name }"
const reportero =`{ _id, name, dni, apellidos, direccion, ciudad, cp }`
const solicitud = `{ _id, reportero ${reportero}, aprobada, descripcion, fecha, equipoFotografico, resumenCV }`

const mapping = {
  solicitud,
  reportero,
  categoria,
}

@Injectable()
export class GqlhttpService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  private parseObject<T>(element: T) {
    return JSON.stringify(element).replace(/\"([^(\")"]+)\":/g, "$1:")
  }

  private genGetString(type: Endpoints, params?: any) {
    return {
      query: `query {
      ${type}s ${ params ? JSON.stringify(params).replace(/\"([^(\")"]+)\":/g, "$1:") : ''} ${mapping[type]}
    }`}
  }

  private genGetoneString(type: Endpoints, id: string) {
    return {
      query: `query { ${type}(id: "${id}") ${mapping[type]} }`
    }
  }

  private genPostString(type: Endpoints, body: Interfaces) {
    return {
      query: `mutation {
      ${type}(element: ${JSON.stringify(body).replace(/\"([^(\")"]+)\":/g, "$1:")}) ${mapping[type]}
    }`}
  }

  get<T>(type: Endpoints, params?: any): Observable<T[]> {
    return this.http.post<any>(environment.apiPath, this.genGetString(type), { headers: this.headers }).pipe(
      map(v => v.data[`${type}s`])
    );
  }

  getOne<T>(type: Endpoints, id: string): Observable<T> {
    return this.http.post<any>(environment.apiPath, this.genGetoneString(type, id), { headers: this.headers }).pipe(
      map(v => v.data[type])
    );
  }

  post<T>(type: Endpoints, body: Interfaces): Observable<T> {
    return this.http.post<any>(environment.apiPath, this.genPostString(type, body), { headers: this.headers }).pipe(
      map(v => v.data[type])
    );
  }
}
