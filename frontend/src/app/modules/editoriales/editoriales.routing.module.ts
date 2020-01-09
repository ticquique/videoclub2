import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialCreationComponent } from './components/create/create.component';
import { EditorialesListComponent } from './components/list/list.component';
import { EditorialesPageComponent } from './components/page/page.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialesRoutingModule { }

