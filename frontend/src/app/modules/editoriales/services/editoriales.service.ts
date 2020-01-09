import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Categoria } from '../../../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {
  apiPath: Endpoints;
  editoriales: BehaviorSubject<Array<Categoria>>;
  editoriales$: Observable<Array<Categoria>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'editorial';
    this.editoriales = new BehaviorSubject<Array<Categoria>>([]);
    this.editoriales$ = this.editoriales.asObservable();
  }

  get():Observable<Array<Categoria>> {
    console.log('Retrieving editoriales');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Categoria>) => this.editoriales.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating categoria');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
