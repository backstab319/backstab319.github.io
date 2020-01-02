import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomProjectService } from '../../shared/custom-project.service';
import { Subscription } from 'rxjs';
import { CustomProject } from '../../shared/custom-project.model';
import { FixProject } from '../../shared/fix-project.model';
import { FixProjectService } from '../../shared/fix-project.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy {

  customProjectsData: CustomProject[] = [];
  private cdssub: Subscription;
  fixProjectsData: FixProject[] = [];
  private fpssub: Subscription;

  constructor( public cdservice: CustomProjectService, public fpsservice: FixProjectService) { }

  ngOnInit() {
    this.cdssub = this.cdservice.getCustomDataListener().subscribe((data: CustomProject[]) => {
      this.customProjectsData = data;
    });
    this.fpssub = this.fpsservice.fixProjectDataListener().subscribe((fdata: FixProject[]) => {
      this.fixProjectsData = fdata;
    });
  }

  ngOnDestroy() {
    this.cdssub.unsubscribe();
    this.fpssub.unsubscribe();
  }

}
