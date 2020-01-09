import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportajeCreationComponent } from './components/create/create.component';
import { ReportajesListComponent } from './components/list/list.component';
import { ReportajesPageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: ReportajesPageComponent,
    children: [
      {
        path: '',
        component: ReportajesListComponent
      },
      {
        path: 'create',
        component: ReportajeCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportajesRoutingModule { }

