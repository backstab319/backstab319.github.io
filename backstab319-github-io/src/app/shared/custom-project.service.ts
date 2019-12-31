import { CustomProject } from './custom-project.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class CustomProjectService {

  private customData: CustomProject[] = [];
  private CustomDataUpdated = new Subject<CustomProject[]>();

  constrctor() {}

  getCustomData() {
    return [...this.customData];
  }

  getCustomDataListener() {
    return this.CustomDataUpdated.asObservable();
  }

  putCustomData(receivedData: CustomProject) {
    this.customData.push(receivedData);
    this.CustomDataUpdated.next([...this.customData]);
  }

}
