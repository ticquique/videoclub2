import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html'
})
export class MoviesCreationComponent {
  solicitudForm: FormGroup;

  constructor(public solicitudService: SolicitudesService) {
    this.solicitudForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      aprobada: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.solicitudService.create(this.solicitudForm.value).subscribe(() => this.solicitudForm.reset());
  }
}
