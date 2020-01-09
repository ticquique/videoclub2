import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorialesService } from '../../services/editoriales.service';

@Component({
  templateUrl: './details.component.html'
})
export class EditorialDetailsComponent implements OnInit {
  editorialForm: FormGroup;
  editorial: any;

  constructor(public editorialesService: EditorialesService, public activatedRoute: ActivatedRoute) {

  }

  edit() {
    this.editorialesService.update(this.editorialForm.value).subscribe();
  }

  ngOnInit(): void {
    this.editorialesService.getOne(this.activatedRoute.snapshot.params.id).subscribe((e) => {
      console.log(e);
      this.editorial = e;
      this.editorialForm = new FormGroup({
        name: new FormControl(this.editorial.name, [Validators.required]),
        direccion: new FormControl(this.editorial.direccion, [Validators.required]),
        cif: new FormControl(this.editorial.cif, [Validators.required])
      });
    });
  }
}
