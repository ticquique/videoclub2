import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  templateUrl: './create.component.html'
})
export class CategoriaCreationComponent {
  categoriaForm: FormGroup;

  constructor(public categoriasService: CategoriasService) {
    this.categoriaForm = new FormGroup({
      ppp: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  }

  create() {
    this.categoriaForm.controls.ppp.setValue(+this.categoriaForm.controls.ppp.value);
    this.categoriaForm.controls.name.setValue(+this.categoriaForm.controls.name.value);
    this.categoriasService.create(this.categoriaForm.value).subscribe(() => this.categoriaForm.reset());
  }
}
