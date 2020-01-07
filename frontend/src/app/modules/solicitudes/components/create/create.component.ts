import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html'
})
export class MoviesCreationComponent {
  solicitudForm: FormGroup;

  constructor(public solicitudService: SolicitudesService) {  }

  create() {
    this.solicitudService.create(this.solicitudForm.value).subscribe(() => this.solicitudForm.reset());
  }
}
