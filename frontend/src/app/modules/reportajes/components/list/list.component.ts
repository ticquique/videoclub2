import { Component } from '@angular/core';

import { ReportajesService } from '../../services/reportajes.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class ReportajesListComponent {
  constructor(public reportajesService: ReportajesService) {
    this.reportajesService.get().subscribe();
  }

  comprar(id) {

  }
}
