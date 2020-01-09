import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbaranesListComponent } from './components/list/list.component';
import { AlbaranesPageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: AlbaranesPageComponent,
    children: [
      {
        path: '',
        component: AlbaranesListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbaranesRoutingModule { }

