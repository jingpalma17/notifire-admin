import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFirestore, private http: HttpClient) {}

  sendSMS(data) {
    return this.http.post<{}>(
      'https://a5d1fdb4.ngrok.io/api/zones/send-fire-alerts',
      data,
    );
  }

  getFireReports() {
    return this.db.collection('fire_reports').snapshotChanges();
  }
  getFireIncidents() {
    return this.db.collection('fire_incidents').snapshotChanges();
  }

  createFireIncident(incident) {
    return this.db.collection('fire_incidents').add(incident);
  }

  updateFireIncident(incident) {
    return this.db
      .collection('fire_incidents')
      .doc(incident.id)
      .set(incident);
  }

  getZones() {
    return this.db.collection('zones').snapshotChanges();
  }

  getZone(zoneKey) {
    return this.db
      .collection('zones')
      .doc(zoneKey)
      .snapshotChanges();
  }

  addZone(zone) {
    return this.db.collection('zones').add(zone);
  }

  updateZone(zone) {
    return this.db
      .collection('zones')
      .doc(zone.id)
      .set(zone);
  }
}
