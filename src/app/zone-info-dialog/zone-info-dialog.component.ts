import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zone-info-dialog',
  templateUrl: './zone-info-dialog.component.html',
  styleUrls: ['./zone-info-dialog.component.scss'],
})
export class ZoneInfoDialogComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
    });
  }

  ngOnInit() {}
}
