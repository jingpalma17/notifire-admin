import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-incident-report-feed',
  templateUrl: './incident-report-feed.component.html',
  styleUrls: ['./incident-report-feed.component.scss'],
})
export class IncidentReportFeedComponent implements OnInit {
  feeds;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getIncidentReportFeed().subscribe(result => {
      this.feeds = result;
    });
  }
}
