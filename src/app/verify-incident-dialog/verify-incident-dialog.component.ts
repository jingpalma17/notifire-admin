import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { ZoneInfoDialogComponent } from '../zone-info-dialog/zone-info-dialog.component';

@Component({
  selector: 'app-verify-incident-dialog',
  templateUrl: './verify-incident-dialog.component.html',
  styleUrls: ['./verify-incident-dialog.component.scss'],
})
export class VerifyIncidentDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(''),
      zone: new FormControl(''),
    });
  }

  createZone() {
    // this.dialog
    //   .open(ZoneInfoDialogComponent, {
    //     width: '280px',
    //   })
    //   .afterClosed()
    //   .subscribe(result => {
    //     if (result) {
    //       // refresh
    //     }
    //   });
  }
}
