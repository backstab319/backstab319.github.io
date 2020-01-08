import { FixProject } from './fix-project.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class FixProjectService {

  private fixProjectData: FixProject[] = [];
  private fixProjectUpdate = new Subject<FixProject[]>();

  constructor(private httpClient: HttpClient) {}


  getFixProjectData() {
    this.httpClient.get<{message: string, data: FixProject[]}>('http://localhost:3000/api/fix/')
      .subscribe((serverData) => {
        this.fixProjectData = serverData.data;
        this.fixProjectUpdate.next([...this.fixProjectData]);
      });
  }

  fixProjectDataListener() {
    return this.fixProjectUpdate.asObservable();
  }

  putFixProjectData(data: FixProject) {
    this.httpClient.post<{message: string}>('http://localhost:3000/api/fix/', data)
      .subscribe((getMessage) => {
        console.log(getMessage.message);
      });
    this.fixProjectUpdate.next([...this.fixProjectData]);
  }
}
