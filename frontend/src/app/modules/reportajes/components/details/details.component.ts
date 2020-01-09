import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './details.component.html'
})
export class EditorialDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {
  }
}
