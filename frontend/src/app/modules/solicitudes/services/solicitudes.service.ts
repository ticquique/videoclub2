import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Solicitud } from '../../../models/solicitud';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  apiPath: Endpoints;
  solicitudes: BehaviorSubject<Array<Solicitud>>;
  solicitudes$: Observable<Array<Solicitud>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'solicitud';
    this.solicitudes = new BehaviorSubject<Array<Solicitud>>([]);
    this.solicitudes$ = this.solicitudes.asObservable();
  }

  get():Observable<Array<Solicitud>> {
    console.log('Retrieving solicitudes');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Solicitud>) => this.solicitudes.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating movie');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
