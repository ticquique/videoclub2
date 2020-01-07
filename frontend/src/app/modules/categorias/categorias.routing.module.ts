import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaCreationComponent } from './components/create/create.component';
import { CategoriasListComponent } from './components/list/list.component';
import { CategoriasPageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPageComponent,
    children: [
      {
        path: '',
        component: CategoriasListComponent
      },
      {
        path: 'create',
        component: CategoriaCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }

