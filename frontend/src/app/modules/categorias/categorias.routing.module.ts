import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteroCreationComponent } from './components/create/create.component';
import { ReporterosListComponent } from './components/list/list.component';
import { ReporterosPageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: ReporterosPageComponent,
    children: [
      {
        path: '',
        component: ReporterosListComponent
      },
      {
        path: 'create',
        component: ReporteroCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }

