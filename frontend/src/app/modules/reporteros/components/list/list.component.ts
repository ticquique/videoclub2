import { Component } from '@angular/core';

import { ReporterosService } from '../../services/reporteros.service';
import { CategoriasService } from '../../../categorias/services/categorias.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class ReporterosListComponent {
  constructor(public reporterosService: ReporterosService, public categoriasService: CategoriasService) {
    this.reporterosService.get().subscribe();
    this.categoriasService.get().subscribe();
  }
}
