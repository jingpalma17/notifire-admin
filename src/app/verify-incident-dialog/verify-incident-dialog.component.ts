import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-incident-dialog',
  templateUrl: './verify-incident-dialog.component.html',
  styleUrls: ['./verify-incident-dialog.component.scss'],
})
export class VerifyIncidentDialogComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
    });
  }
}
