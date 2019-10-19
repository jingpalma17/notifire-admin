import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-zone-info-dialog',
  templateUrl: './zone-info-dialog.component.html',
  styleUrls: ['./zone-info-dialog.component.scss'],
})
export class ZoneInfoDialogComponent implements OnInit {
  form: FormGroup;
  zone;
  title = 'Zone Info';
  action = 'Apply';

  constructor(
    private dialogRef: MatDialogRef<ZoneInfoDialogComponent>,
    private firebaseService: FirebaseService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    if (data) {
      this.zone = data.payload.doc.data();
      this.zone.id = data.payload.doc.id;
    } else {
      this.zone = {};
      this.title = 'Add Zone';
      this.action = 'Add';
    }
    this.form = new FormGroup({
      code: new FormControl(this.zone.code || ''),
      name: new FormControl(this.zone.name || ''),
      description: new FormControl(this.zone.description || ''),
    });
  }

  ngOnInit() {}

  save(zone) {
    if (this.zone.id) {
      this.update({ ...zone, id: this.zone.id });
    } else {
      this.create(zone);
    }
  }

  create(zone) {
    this.firebaseService.addZone(zone).then(result => {
      this.dialogRef.close();
      this.snackbar.open('Zone added', 'Ok', { duration: 3000 });
    });
  }

  update(zone) {
    this.firebaseService.updateZone(zone).then(result => {
      this.dialogRef.close(true);
      this.snackbar.open('Zone info updated', 'Ok', { duration: 3000 });
    });
  }
}
