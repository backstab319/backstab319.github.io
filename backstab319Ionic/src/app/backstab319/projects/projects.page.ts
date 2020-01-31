import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects: Project[] = [
    {
      projectRepo: 'https://github.com/backstab319/Client-Management-System',
      projectName: 'Client Management System',
      projectDescription: 'Used to manage the clients and employees of an organisation',
      projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5aPgYPuknkvKugUQy4gj_gWWxosKosRB0tEAV3WPp5osTc4Nc'
    },
    {
      projectRepo: 'https://github.com/backstab319/Residency-Exchange-Collaberation-System',
      projectName: 'Residency Exchange Collaboration System',
      // tslint:disable-next-line: max-line-length
      projectDescription: 'Used to enable interaction between people staying in recidency areas. And by the local market to connect with people in residency for better understanding of their needs.',
      projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
      projectThumbnail: 'https://www.theresidency.com/theme/frontend/images/the-residency-towers-puducherry.jpg'
    },
    {
      projectRepo: 'https://github.com/backstab319/Python-Translator-and-TTS',
      projectName: 'Python-Translator-and-TTS',
      projectDescription: 'A command line translator to and fro multiple languages with text to speech support written in python',
      projectLangs: ['python 3.6'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpL9GcjB1VG-Gc39MGTX20qGNmIuu9J2MWkm_ozeIoPtMGbtK_'
    },
    {
      projectRepo: 'https://github.com/backstab319/Python-Learning-Process/tree/master/Python_datatypes_tutorial_project',
      projectName: 'Python datatypes methods tutorial',
      projectDescription: 'A simple python program made to demonstrate various builtin methods in python',
      projectLangs: ['python 3.6'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxCfUVZVMhh7f0oooBYTQFEFpQfolU-GfDntsOVSEB0Ty3Fw6y'
    },
    {
      projectRepo: 'https://github.com/backstab319/Pharmacy-Management-System',
      projectName: 'Pharmacy Management System',
      // tslint:disable-next-line: max-line-length
      projectDescription: 'Tool for the pharmacy to have much better control over their inventory and provide various tools to make their job easier. Includes 3 different frontends for various hierarchy',
      projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6EzHZs2ymAIlU7XkAvfQY2HMK1NcrDDSEm3v4rrex5MOedKnv'
    },
    {
      projectRepo: 'https://github.com/backstab319/Hospital-Management-System',
      projectName: 'Hospital Management System',
      // tslint:disable-next-line: max-line-length
      projectDescription: 'Tool developed for hospitals to keep the large amount of data in a much more organised manner. Provide online presence for the hospital and doctor and patients. Allowing making online appointments, test results and much more',
      projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQa2q-zOo99oUE_-vG6d9aDOD5h-r3Ptn0I2hwkh_qJpQqiuOM'
    },
    {
      projectRepo: 'https://github.com/backstab319/Crime-Reporting-System',
      projectName: 'Crime Reporting System',
      // tslint:disable-next-line: max-line-length
      projectDescription: 'Giving local police stations online presence hence citizens can be alerted or notified in emergency or people can report anything suspicious online. Also provides police stations tools to maintain their large data using provided tools',
      projectLangs: ['Php', 'html', 'css', 'js', 'bootstrap', 'sql'],
      projectThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMu42zhgYEpJdZQGN-34LWVUcmGFXRIR1SSGTYVXA4YqUxenzc'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
