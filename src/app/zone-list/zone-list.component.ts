import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FirebaseService } from '../services/firebase.service';
import { ZoneInfoDialogComponent } from '../zone-info-dialog/zone-info-dialog.component';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss'],
})
export class ZoneListComponent implements OnInit {
  displayedColumns = ['position', 'name', 'longLat', 'actions'];

  zones;

  constructor(
    private firebaseService: FirebaseService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.firebaseService.getZones().subscribe(result => {
      this.zones = result;
    });
  }

  addZone() {
    this.dialog
      .open(ZoneInfoDialogComponent, {
        width: '400px',
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          // refresh
        }
      });
  }

  updateZone(zone) {
    this.dialog
      .open(ZoneInfoDialogComponent, {
        width: '400px',
        data: zone,
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          // refresh
        }
      });
  }
}
