import { Component } from '@angular/core';

import { CategoriasService } from '../../services/categorias.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class CategoriasListComponent {
  constructor(public categoriasService: CategoriasService) {
    this.categoriasService.get().subscribe();
  }
}
