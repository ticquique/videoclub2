import { NgModule } from '@angular/core';

import { AlbaranesRoutingModule } from './albaranes.routing.module';
import { AlbaranesPageComponent } from './components/page/page.component';
import { AlbaranesListComponent } from './components/list/list.component';
import { AlbaranesService } from './services/albaranes.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    AlbaranesRoutingModule,
    SharedModule
  ],
  declarations: [
    AlbaranesListComponent,
    AlbaranesPageComponent
  ],
  providers: [AlbaranesService]
})
export class AlbaranesModule { }
