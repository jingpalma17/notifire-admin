import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { MessageNotifDialogComponent } from '../message-notif-dialog/message-notif-dialog.component';
import { FireIncidentInfoDialogComponent } from '../fire-incident-info-dialog/fire-incident-info-dialog.component';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss'],
})
export class IncidentListComponent implements OnInit {
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

  createIncident() {
    this.dialog
      .open(FireIncidentInfoDialogComponent, {
        width: '400px',
      })
      .afterClosed()
      .subscribe(result => {});
  }
}
