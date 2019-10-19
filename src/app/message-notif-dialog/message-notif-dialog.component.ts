import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-message-notif-dialog',
  templateUrl: './message-notif-dialog.component.html',
  styleUrls: ['./message-notif-dialog.component.scss'],
})
export class MessageNotifDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<MessageNotifDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(''),
    });
  }

  sendSms(message) {
    const data = { message, zones: this.data.zones };
    this.firebaseService.sendSMS(data).subscribe(result => {
      this.dialogRef.close(true);
      this.snackbar.open('Alert sent', 'Ok', { duration: 3000 });
    });
  }
}
