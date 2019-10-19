import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentReportFeedComponent } from './incident-report-feed/incident-report-feed.component';
import { IncidentReportsComponent } from './incident-reports/incident-reports.component';
import { ZoneListComponent } from './zone-list/zone-list.component';

const routes: Routes = [
  { path: '', component: IncidentReportFeedComponent },
  { path: 'incident-report-feed', component: IncidentReportFeedComponent },
  { path: 'incident-reports', component: IncidentReportsComponent },
  { path: 'zones', component: ZoneListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
