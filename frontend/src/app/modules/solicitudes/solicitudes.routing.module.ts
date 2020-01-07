import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudCreationComponent } from './components/create/create.component';
import { SolicitudesListComponent } from './components/list/list.component';
import { SolicitudesPageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesPageComponent,
    children: [
      {
        path: '',
        component: SolicitudesListComponent
      },
      {
        path: 'create',
        component: SolicitudCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }

