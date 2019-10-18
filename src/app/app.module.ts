import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { IncidentReportFeedComponent } from './incident-report-feed/incident-report-feed.component';

import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, IncidentReportFeedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
