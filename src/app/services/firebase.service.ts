import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore) {}
  getIncidentReportFeed() {
    return this.db.collection('test').snapshotChanges();
  }
}
