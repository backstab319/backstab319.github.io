import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FixProjectService } from '../../shared/fix-project.service';

@Component({
  selector: 'app-fix-project',
  templateUrl: './fix-project.component.html',
  styleUrls: ['./fix-project.component.css']
})
export class FixProjectComponent implements OnInit {

  constructor(public fpservice: FixProjectService) { }

  ngOnInit() {
  }

  onFixProject(fixFormData: NgForm) {
    if (fixFormData.invalid) {
      return;
    }
    this.fpservice.putFixProjectData({
      personName: fixFormData.value.personName,
      personEmail: fixFormData.value.personEmail,
      projectIssue: fixFormData.value.projectIssue
    });
    fixFormData.resetForm();
  }

}
