import { Component, OnInit } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { FireIncidentInfoDialogComponent } from '../fire-incident-info-dialog/fire-incident-info-dialog.component';

@Component({
  selector: 'app-fire-report-list',
  templateUrl: './fire-report-list.component.html',
  styleUrls: ['./fire-report-list.component.scss'],
})
export class FireReportListComponent implements OnInit {
  reports;

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
    private router: Router,
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
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/incident-reports']);
        }
      });
  }

  getThumbnail(source) {
    const placeholder = 'https://placekitten.com/200/300';
    switch (source) {
      case 'app':
        return 'https://placekitten.com/200/300';
      case 'mobile':
        return 'https://placekitten.com/200/300';
      case 'twitter':
        return 'https://placekitten.com/200/300';
    }
  }
}
