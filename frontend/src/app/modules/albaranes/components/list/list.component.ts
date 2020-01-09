import { Component } from '@angular/core';

import { AlbaranesService } from '../../services/albaranes.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class AlbaranesListComponent {
  constructor(public albaranesService: AlbaranesService) {
    this.albaranesService.get().subscribe();
  }
}
