import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FireReportListComponent } from './fire-report-list/fire-report-list.component';

import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { FireIncidentInfoDialogComponent } from './fire-incident-info-dialog/fire-incident-info-dialog.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { ZoneInfoDialogComponent } from './zone-info-dialog/zone-info-dialog.component';
import { MessageNotifDialogComponent } from './message-notif-dialog/message-notif-dialog.component';
import { ZoneListComponent } from './zone-list/zone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FireReportListComponent,
    FireIncidentInfoDialogComponent,
    IncidentListComponent,
    ZoneInfoDialogComponent,
    MessageNotifDialogComponent,
    ZoneListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  entryComponents: [
    FireIncidentInfoDialogComponent,
    ZoneInfoDialogComponent,
    MessageNotifDialogComponent,
  ],
})
export class AppModule {}
