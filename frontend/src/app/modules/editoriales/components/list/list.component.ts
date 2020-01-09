import { Component } from '@angular/core';

import { EditorialesService } from '../../services/editoriales.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class EditorialesListComponent {
  constructor(public editorialesService: EditorialesService) {
    this.editorialesService.get().subscribe();
  }
}
