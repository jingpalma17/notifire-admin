import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { MessageNotifDialogComponent } from '../message-notif-dialog/message-notif-dialog.component';

@Component({
  selector: 'app-incident-reports',
  templateUrl: './incident-reports.component.html',
  styleUrls: ['./incident-reports.component.scss'],
})
export class IncidentReportsComponent implements OnInit {
  incidents;

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.firebaseService.getFireIncidents().subscribe(result => {
      this.incidents = result;
    });
  }

  sendMessageNotif() {
    this.dialog
      .open(MessageNotifDialogComponent, {
        width: '400px',
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          // refresh
        }
      });
  }
}
