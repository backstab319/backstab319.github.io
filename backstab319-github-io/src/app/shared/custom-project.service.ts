import { CustomProject } from './custom-project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class CustomProjectService {

  constructor(private httpClient: HttpClient) {}

  private data: CustomProject[] = [];
  private dataUpdated = new Subject<CustomProject[]>();

  getData() {
    this.httpClient.get<{message: string, data: CustomProject[]}>('http://localhost:3000/api/')
      .subscribe((receivedData) => {
        this.data = receivedData.data;
        this.dataUpdated.next([...this.data]);
      });
  }

  getDataListener() {
    return this.dataUpdated.asObservable();
  }

  putData(postedData: CustomProject) {
    this.httpClient.post<{message: string}>('http://localhost:3000/api/', postedData)
      .subscribe((responseData) => {
        console.log(responseData);
        this.data.push(postedData);
        this.dataUpdated.next([...this.data]);
      });
  }

}
