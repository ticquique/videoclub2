import { NgModule } from '@angular/core';

import { ReportajesRoutingModule } from './reportajes.routing.module';
import { ReportajesService } from './services/reportajes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportajesListComponent } from './components/list/list.component';
import { ReportajesPageComponent } from './components/page/page.component';
import { ReportajeCreationComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReportajesRoutingModule,
    SharedModule
  ],
  declarations: [
    ReportajeCreationComponent,
    ReportajesListComponent,
    ReportajesPageComponent
  ],
  providers: [ReportajesService]
})
export class ReportajesModule { }
