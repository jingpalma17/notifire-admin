import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { VerifyIncidentDialogComponent } from '../verify-incident-dialog/verify-incident-dialog.component';

@Component({
  selector: 'app-incident-report-feed',
  templateUrl: './incident-report-feed.component.html',
  styleUrls: ['./incident-report-feed.component.scss'],
})
export class IncidentReportFeedComponent implements OnInit {
  feeds;

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.firebaseService.getIncidentReportFeed().subscribe(result => {
      this.feeds = result;
    });
  }

  verifyIncident() {
    this.dialog
      .open(VerifyIncidentDialogComponent, {
        width: '280px',
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          // refresh
        }
      });
  }
}
