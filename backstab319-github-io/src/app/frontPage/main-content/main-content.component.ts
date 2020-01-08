import { Component, OnInit } from '@angular/core';
import { CustomProject } from '../../shared/custom-project.model';
import { CustomProjectService } from '../../shared/custom-project.service';

import { FixProject } from '../../shared/fix-project.model';
import { FixProjectService } from '../../shared/fix-project.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(
    public customProjectService: CustomProjectService,
    public fixProjectService: FixProjectService
  ) { }

  data: CustomProject[] = [];
  fixData: FixProject[] = [];

  ngOnInit() {
    this.customProjectService.getData();
    this.customProjectService.getDataListener().subscribe((data: CustomProject[]) => {
      this.data = data;
    });
    this.fixProjectService.getFixProjectData();
    this.fixProjectService.fixProjectDataListener().subscribe((fixData) => {
      this.fixData = fixData;
    });
  }

}
