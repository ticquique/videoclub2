import { NgModule } from '@angular/core';

import { ReporterosRoutingModule } from './reporteros.routing.module';
import { ReporterosPageComponent } from './components/page/page.component';
import { ReporterosListComponent } from './components/list/list.component';
import { ReporteroCreationComponent } from './components/create/create.component';
import { ReporterosService } from './services/reporteros.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    ReporterosRoutingModule,
    SharedModule
  ],
  declarations: [
    ReporteroCreationComponent,
    ReporterosListComponent,
    ReporterosPageComponent
  ],
  providers: [ReporterosService]
})
export class ReporterosModule { }
