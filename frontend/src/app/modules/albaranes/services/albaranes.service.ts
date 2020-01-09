import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Albaran } from '../../../models/albaran';

@Injectable({
  providedIn: 'root'
})
export class AlbaranesService {
  apiPath: Endpoints;
  albaranes: BehaviorSubject<Array<Albaran>>;
  albaranes$: Observable<Array<Albaran>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'albaran';
    this.albaranes = new BehaviorSubject<Array<Albaran>>([]);
    this.albaranes$ = this.albaranes.asObservable();
  }

  get():Observable<Array<Albaran>> {
    console.log('Retrieving albaranes');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Albaran>) => this.albaranes.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating albarane');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
