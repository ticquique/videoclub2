import { Component } from '@angular/core';

import { ReporterosService } from '../../services/reporteros.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class ReporterosListComponent {
  constructor(public reporterosService: ReporterosService) {
    this.reporterosService.get().subscribe();
  }
}
