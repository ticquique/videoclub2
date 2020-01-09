import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportajesService } from '../../services/reportajes.service';
import { ReporterosService } from '../../../reporteros/services/reporteros.service';

@Component({
  templateUrl: './create.component.html'
})
export class ReportajeCreationComponent {
  reportajeForm: FormGroup;

  constructor(public reportajesService: ReportajesService, public reporterosService: ReporterosService) {
    this.reporterosService.get().subscribe();
    this.reportajeForm = new FormGroup({
      numeroFotos: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      reportero: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.reportajeForm.controls.numeroFotos.setValue(+this.reportajeForm.controls.numeroFotos.value);
    this.reportajesService.create(this.reportajeForm.value).subscribe(() => this.reportajeForm.reset());
  }
}
