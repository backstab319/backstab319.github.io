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
      appName: 'Lets connect',
      appDescription: 'A video calling and texting web application made using ionic framework with jitsi to enable video calling',
      appFeatures: ['Video calling', 'Texting', 'Material UI', 'Clean Interface', 'Beautiful interface', 'Cross platform', 'More features to come'],
      appImage: 'https://jitsi.org/wp-content/uploads/2021/01/jitsi-meet.jpg',
      appCode: 'https://github.com/backstab319/lets-connect',
      appOpenLink: 'https://backstab-7d143.web.app/'
    },
    {
      appName: 'Chat web app',
      appDescription: 'A simple chat web app made using angular and ionic framework',
      appFeatures: ['Easy to use', 'Beautiful interface', 'Cross platform', 'More features to come'],
      appImage: 'https://imgur.com/R3xZcWl.png',
      appCode: 'https://github.com/backstab319/chat-web-app',
      appOpenLink: '/applications/chat-web-app'
    },
    {
      appName: 'To Do',
      appDescription: 'List out your things to do so that you dont forget them',
      // tslint:disable-next-line: max-line-length
      appFeatures: ['Make a note', 'Edit notes', 'Delete notes', 'Reorder notes', 'Color notes', 'Strike complete notes', 'Completed notes section'],
      appImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxufq9XwZsW75qlbaSXqCf0NKmLSgxj4P-Iw7i_4p58wxA4AHc',
      appCode: 'https://github.com/backstab319/backstab319.github.io/tree/todo',
      appOpenLink: '/applications/todo'
    },
    {
      appName: 'Expenses',
      appDescription: 'List out your future of past expenses to keep track of them',
      // tslint:disable-next-line: max-line-length
      appFeatures: ['Categorize expenses', 'Label categories', 'Calculate different expenses', 'Customize boards with colors', 'Edit existing boards', 'Add to existing boards'],
      appImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn2xZCG7MxjxyYGPh9mlF_qp65ZM_amHJW-ZQG9ciCBfTntM0N',
      appCode: 'https://github.com/backstab319/backstab319.github.io/tree/expenses',
      appOpenLink: '/applications/expenses'
    },
  ];

  constructor(private gs: GeneralService) { }

  ngOnInit() {
  }

  openApp(appDetail: AppDetail) {
    let externalAppLinks: string[] = ['Lets connect'];

    if (externalAppLinks.includes(appDetail.appName)) {
      window.open(appDetail.appOpenLink, '_blank');
    } else {
      this.gs.gotoAbs(appDetail.appOpenLink);
    }
  }

}
