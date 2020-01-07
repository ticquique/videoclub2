import { NgModule } from '@angular/core';

import { SolicitudesRoutingModule } from './solicitudes.routing.module';
import { SolicitudesPageComponent } from './components/page/page.component';
import { SolicitudesListComponent } from './components/list/list.component';
import { SolicitudCreationComponent } from './components/create/create.component';
import { SolicitudesService } from './services/solicitudes.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SolicitudesRoutingModule,
    SharedModule
  ],
  declarations: [
    SolicitudCreationComponent,
    SolicitudesListComponent,
    SolicitudesPageComponent
  ],
  providers: [SolicitudesService]
})
export class SolicitudesModule { }
