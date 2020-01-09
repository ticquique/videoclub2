import { NgModule } from '@angular/core';

import { EditorialesRoutingModule } from './editoriales.routing.module';
import { EditorialesService } from './services/editoriales.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorialesListComponent } from './components/list/list.component';
import { EditorialesPageComponent } from './components/page/page.component';
import { EditorialCreationComponent } from './components/create/create.component';
import { EditorialDetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorialesRoutingModule,
    SharedModule
  ],
  declarations: [
    EditorialCreationComponent,
    EditorialesListComponent,
    EditorialesPageComponent,
    EditorialDetailsComponent
  ],
  providers: [EditorialesService]
})
export class EditorialesModule { }
