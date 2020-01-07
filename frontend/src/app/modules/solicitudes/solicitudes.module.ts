import { NgModule } from '@angular/core';

import { SolicitudesRoutingModule } from './solicitudes.routing.module';
import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';
import { SolicitudesService } from './services/solicitudes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    SolicitudesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviesListComponent,
    MoviesCreationComponent,
    MovieDetailsComponent
  ],
  providers: [SolicitudesService]
})
export class SolicitudesModule { }
