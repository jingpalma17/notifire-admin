import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { FireIncidentInfoDialogComponent } from '../fire-incident-info-dialog/fire-incident-info-dialog.component';

@Component({
  selector: 'app-incident-report-feed',
  templateUrl: './incident-report-feed.component.html',
  styleUrls: ['./incident-report-feed.component.scss'],
})
export class IncidentReportFeedComponent implements OnInit {
  reports;

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.firebaseService.getFireReports().subscribe(result => {
      this.reports = result;
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
