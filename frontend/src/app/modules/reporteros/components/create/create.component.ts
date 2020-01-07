import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReporterosService } from '../../services/reporteros.service';

@Component({
  templateUrl: './create.component.html'
})
export class ReporteroCreationComponent {
  reporteroForm: FormGroup;

  constructor(public reporterosService: ReporterosService) {
    this.reporteroForm = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      cp: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.reporterosService.create(this.reporteroForm.value).subscribe(() => this.reporteroForm.reset());
  }
}
