import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-fire-incident-info-dialog',
  templateUrl: './fire-incident-info-dialog.component.html',
  styleUrls: ['./fire-incident-info-dialog.component.scss'],
})
export class FireIncidentInfoDialogComponent implements OnInit {
  form: FormGroup;
  incident;
  title = 'Incident Info';
  action = 'Apply';
  zones;

  constructor(
    private dialogRef: MatDialogRef<FireIncidentInfoDialogComponent>,
    private firebaseService: FirebaseService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    if (data) {
      this.incident = data.payload.doc.data();
      this.incident.id = data.payload.doc.id;
    } else {
      this.incident = {};
      this.title = 'Add Incident';
      this.action = 'Add';
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      status: new FormControl(this.incident.status || ''),
      zones: new FormControl(this.incident.zone || ''),
    });

    this.firebaseService.getZones().subscribe(result => {
      this.zones = result;
    });
  }

  save(incident) {
    if (this.incident.id) {
      this.update({ ...incident, id: this.incident.id });
    } else {
      this.create(incident);
    }
  }

  create(incident) {
    this.firebaseService.createFireIncident(incident).then(result => {
      this.dialogRef.close(true);
      this.snackbar.open('Incident added', 'Ok', { duration: 3000 });
    });
  }

  update(incident) {
    this.firebaseService.updateFireIncident(incident).then(result => {
      this.dialogRef.close(true);
      this.snackbar.open('Incident info updated', 'Ok', { duration: 3000 });
    });
  }
}
