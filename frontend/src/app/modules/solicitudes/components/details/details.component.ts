import { Component } from '@angular/core';

import { SolicitudesService } from '../../services/solicitudes.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './details.component.html'
})
export class MovieDetailsComponent {
  constructor(private moviesService: SolicitudesService, private activatedRoute: ActivatedRoute) {
    this.moviesService.getById(this.activatedRoute.snapshot.params.id).subscribe();
  }
}
