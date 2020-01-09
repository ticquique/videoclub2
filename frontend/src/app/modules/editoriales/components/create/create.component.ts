import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorialesService } from '../../services/editoriales.service';

@Component({
  templateUrl: './create.component.html'
})
export class EditorialCreationComponent {
  editorialForm: FormGroup;

  constructor(public editorialsService: EditorialesService) {
    this.editorialForm = new FormGroup({
      cif: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.editorialsService.create(this.editorialForm.value).subscribe(() => this.editorialForm.reset());
  }
}
