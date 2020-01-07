import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReporterosService } from '../../../reporteros/services/reporteros.service';

@Component({
  templateUrl: './create.component.html'
})
export class SolicitudCreationComponent {
  solicitudForm: FormGroup;

  constructor(public solicitudService: SolicitudesService, public reporterosService: ReporterosService) {
    this.solicitudForm = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      aprobada: new FormControl(false, [Validators.required]),
      reportero: new FormControl('', [Validators.required]),
      equipoFotografico: new FormControl('', [Validators.required]),
      resumenCV: new FormControl('', [Validators.required])
    });
    this.reporterosService.get().subscribe()
  }

  create() {
    this.solicitudService.create(this.solicitudForm.value).subscribe(() => this.solicitudForm.reset());
  }
}
