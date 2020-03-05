import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.page.html',
  styleUrls: ['./current-projects.page.scss'],
})
export class CurrentProjectsPage implements OnInit {

  projects: Project[] = [
    {
      projectName: 'backstab319.github.io',
      projectDescription: 'My progressive web app to display my personal projects and interest',
      projectRepo: 'https://github.com/backstab319/backstab319.github.io',
      projectLangs: ['Ionic Framework', 'Angular'],
      projectThumbnail: 'https://i.imgur.com/t5HqN3P.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
