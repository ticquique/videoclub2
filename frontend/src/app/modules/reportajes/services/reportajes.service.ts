import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Reportaje } from '../../../models/reportaje';

@Injectable({
  providedIn: 'root'
})
export class ReportajesService {
  apiPath: Endpoints;
  reportajes: BehaviorSubject<Array<Reportaje>>;
  reportajes$: Observable<Array<Reportaje>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'reportaje';
    this.reportajes = new BehaviorSubject<Array<Reportaje>>([]);
    this.reportajes$ = this.reportajes.asObservable();
  }

  get():Observable<Array<Reportaje>> {
    console.log('Retrieving reportajes');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Reportaje>) => this.reportajes.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating reportaje');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
