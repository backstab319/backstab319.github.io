import { Component, OnInit } from '@angular/core';
import { AppDetail } from './app-detail';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {
  apps: AppDetail[] = [
    {
      appName: 'To Do',
      appDescription: 'List out your things to do so that you dont forget them',
      appFeatures: ['Make a note', 'Edit notes', 'Delete notes', 'Reorder notes', 'Color notes'],
      appImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxufq9XwZsW75qlbaSXqCf0NKmLSgxj4P-Iw7i_4p58wxA4AHc',
      appCode: 'https://github.com/backstab319/backstab319.github.io',
      appOpenLink: '/applications/todo'
    }
  ];

  constructor(private gs: GeneralService) { }

  ngOnInit() {
  }

  openApp(appLink: string) {
    this.gs.gotoAbs(appLink);
  }

}
