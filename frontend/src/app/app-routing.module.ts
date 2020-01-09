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
  },
  {
    path: 'editoriales',
    loadChildren: () => import('./modules/editoriales/editoriales.module').then(m => m.EditorialesModule)
  },
  {
    path: 'reportajes',
    loadChildren: () => import('./modules/reportajes/reportajes.module').then(m => m.ReportajesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
