import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialCreationComponent } from './components/create/create.component';
import { EditorialesListComponent } from './components/list/list.component';
import { EditorialesPageComponent } from './components/page/page.component';
import { EditorialDetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: EditorialesPageComponent,
    children: [
      {
        path: '',
        component: EditorialesListComponent
      },
      {
        path: 'create',
        component: EditorialCreationComponent
      },
      {
        path: ':id',
        component: EditorialDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }

