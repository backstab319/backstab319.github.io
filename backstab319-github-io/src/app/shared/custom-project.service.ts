import { CustomProject } from './custom-project.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})

export class CustomProjectService {

  private customData: CustomProject[] = [];
  private CustomDataUpdated = new Subject<CustomProject[]>();

  constructor(private db: AngularFirestore) {}

  getCustomData() {
    return this.db.collection('users').snapshotChanges();
  }

  getCustomDataListener() {
    return this.CustomDataUpdated.asObservable();
  }

  putCustomData(receivedData: CustomProject) {
    this.customData.push(receivedData);
    this.CustomDataUpdated.next([...this.customData]);
  }

}
