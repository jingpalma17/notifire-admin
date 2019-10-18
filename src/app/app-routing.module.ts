import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentReportFeedComponent } from './incident-report-feed/incident-report-feed.component';

const routes: Routes = [
  { path: '', component: IncidentReportFeedComponent },
  { path: 'incident-report-feed', component: IncidentReportFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
