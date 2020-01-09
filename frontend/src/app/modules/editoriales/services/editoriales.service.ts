import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';
import { Endpoints, GqlhttpService } from '../../../shared/services/gqlhttp.service';
import { Editorial } from '../../../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {
  apiPath: Endpoints;
  editoriales: BehaviorSubject<Array<Editorial>>;
  editoriales$: Observable<Array<Editorial>>;
  editorial: BehaviorSubject<Editorial>;
  editorial$: Observable<Editorial>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'editorial';
    this.editoriales = new BehaviorSubject<Array<Editorial>>([]);
    this.editoriales$ = this.editoriales.asObservable();
    this.editorial = new BehaviorSubject<Editorial>(null);
    this.editorial$ = this.editorial.asObservable();
  }

  get():Observable<Array<Editorial>> {
    console.log('Retrieving editoriales');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Editorial>) => this.editoriales.next(response)));
  }


  getOne(id): any {
    console.log('Retrieving editoriales');
    return this.gqlhttp.get(this.apiPath, {resources: { _id: id}}).pipe(
      map(v => v[0]),
      tap((response: any) => {
        console.log('1', response);
        this.editorial.next(response)
    }));
  }

  create(body): Observable<any> {
    console.log('Creating Editorial');
    return this.gqlhttp.post(this.apiPath, body);
  }

  update(body): Observable<any> {
    console.log('Updating Editorial');
    const sender = { ...body };
    sender._id = this.editorial.getValue()._id ;

    return this.gqlhttp.post(this.apiPath, sender);
  }
}
