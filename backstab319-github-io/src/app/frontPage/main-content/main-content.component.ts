import { Component, OnInit } from '@angular/core';
import { CustomProject } from '../../shared/custom-project.model';
import { CustomProjectService } from '../../shared/custom-project.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(public customProjectService: CustomProjectService) { }

  data: CustomProject[] = [];

  ngOnInit() {
    this.customProjectService.getData();
    this.customProjectService.getDataListener().subscribe((data: CustomProject[]) => {
      this.data = data;
    });
  }

}
