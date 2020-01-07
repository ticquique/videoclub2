import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html'
})
export class SolicitudCreationComponent {
  solicitudForm: FormGroup;

  constructor(public solicitudService: SolicitudesService) {
    this.solicitudForm = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      aprobada: new FormControl('', [Validators.required]),
      reportero: new FormControl('', [Validators.required]),
      equipoFotografico: new FormControl('', [Validators.required]),
      resumenCV: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.solicitudService.create(this.solicitudForm.value).subscribe(() => this.solicitudForm.reset());
  }
}
