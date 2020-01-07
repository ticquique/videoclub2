import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReporterosService } from '../../services/reporteros.service';
import { CategoriasService } from '../../../categorias/services/categorias.service';

@Component({
  templateUrl: './create.component.html'
})
export class ReporteroCreationComponent {
  reporteroForm: FormGroup;
  cates: any;

  constructor(public reporterosService: ReporterosService, public categoriaService: CategoriasService) {
    this.reporteroForm = new FormGroup({
      dni: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      cp: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });
    this.categoriaService.get().subscribe((response) => this.cates = response);
  }

  create() {
    this.reporterosService.create(this.reporteroForm.value).subscribe(() => this.reporteroForm.reset());
  }
}
