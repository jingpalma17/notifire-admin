import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireReportListComponent } from './fire-report-list/fire-report-list.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { ZoneListComponent } from './zone-list/zone-list.component';

const routes: Routes = [
  { path: '', component: FireReportListComponent },
  { path: 'incident-report-feed', component: FireReportListComponent },
  { path: 'incident-reports', component: IncidentListComponent },
  { path: 'zones', component: ZoneListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
