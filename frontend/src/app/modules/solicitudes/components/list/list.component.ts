import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class SolicitudesListComponent {
  constructor(public solicitudesService: SolicitudesService) {
    this.solicitudesService.get().subscribe();
  }

  aprobe(id) {
    this.solicitudesService.aprobe({ _id: id, aprobada: true }).subscribe()
  }
}
