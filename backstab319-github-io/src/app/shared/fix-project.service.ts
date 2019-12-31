import { FixProject } from './fix-project.model';
import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';

@Injectable({providedIn: 'root'})

export class FixProjectService {

  private fixProjectData: FixProject[] = [];
  private fixProjectUpdate = new Subject<FixProject[]>();

  getFixProjectData() {
    return [...this.fixProjectData];
  }

  fixProjectDataListener() {
    return this.fixProjectUpdate.asObservable();
  }

  putFixProjectData(data: FixProject) {
    this.fixProjectData.push(data);
    this.fixProjectUpdate.next([...this.fixProjectData]);
  }
}
