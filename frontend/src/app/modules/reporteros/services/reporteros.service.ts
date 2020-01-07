import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Solicitud } from '../../../models/solicitud';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Reportero } from '../../../models/reportero';

@Injectable({
  providedIn: 'root'
})
export class ReporterosService {
  apiPath: Endpoints;
  reporteros: BehaviorSubject<Array<Reportero>>;
  reporteros$: Observable<Array<Reportero>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'reportero';
    this.reporteros = new BehaviorSubject<Array<Reportero>>([]);
    this.reporteros$ = this.reporteros.asObservable();
  }

  get():Observable<Array<Reportero>> {
    console.log('Retrieving reporteros');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Reportero>) => this.reporteros.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating reportero');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
