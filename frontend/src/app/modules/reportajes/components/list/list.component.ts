import { Component } from '@angular/core';

import { ReportajesService } from '../../services/reportajes.service';
import { AlbaranesService } from '../../../albaranes/services/albaranes.service';
import { EditorialesService } from '../../../editoriales/services/editoriales.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class ReportajesListComponent {
  edito: any;
  pvp: any;

  constructor(public reportajesService: ReportajesService, public albaranesService: AlbaranesService, public editorialesService: EditorialesService) {
    this.reportajesService.get().subscribe();
    this.editorialesService.get().subscribe();
  }

  comprar(id) {
    const body = {
      editorial: this.edito,
      reportaje: id,
      cantidadRecibida: this.pvp
    };
    this.albaranesService.create(body).subscribe();
  }
}
