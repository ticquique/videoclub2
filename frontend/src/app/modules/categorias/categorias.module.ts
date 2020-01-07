import { NgModule } from '@angular/core';

import { CategoriasRoutingModule } from './categorias.routing.module';
import { CategoriasPageComponent } from './components/page/page.component';
import { CategoriasListComponent } from './components/list/list.component';
import { CategoriaCreationComponent } from './components/create/create.component';
import { CategoriasService } from './services/categorias.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CategoriasRoutingModule,
    SharedModule
  ],
  declarations: [
    CategoriaCreationComponent,
    CategoriasListComponent,
    CategoriasPageComponent
  ],
  providers: [CategoriasService]
})
export class CategoriasModule { }
