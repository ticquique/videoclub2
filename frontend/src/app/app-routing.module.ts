import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'solicitudes',
    loadChildren: () => import('./modules/solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
  },
  {
    path: 'reporteros',
    loadChildren: () => import('./modules/reporteros/reporteros.module').then(m => m.ReporterosModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./modules/categorias/categorias.module').then(m => m.CategoriasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
