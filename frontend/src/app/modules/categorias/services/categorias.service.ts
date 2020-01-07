import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Categoria } from '../../../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  apiPath: Endpoints;
  categorias: BehaviorSubject<Array<Categoria>>;
  categorias$: Observable<Array<Categoria>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'categoria';
    this.categorias = new BehaviorSubject<Array<Categoria>>([]);
    this.categorias$ = this.categorias.asObservable();
  }

  get():Observable<Array<Categoria>> {
    console.log('Retrieving categorias');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Categoria>) => this.categorias.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating categoria');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
