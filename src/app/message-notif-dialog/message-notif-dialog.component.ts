import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-notif-dialog',
  templateUrl: './message-notif-dialog.component.html',
  styleUrls: ['./message-notif-dialog.component.scss'],
})
export class MessageNotifDialogComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(''),
    });
  }
}
