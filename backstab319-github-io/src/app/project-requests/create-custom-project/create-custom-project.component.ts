import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomProjectService } from '../../shared/custom-project.service';

@Component({
  selector: 'app-create-custom-project',
  templateUrl: './create-custom-project.component.html',
  styleUrls: ['./create-custom-project.component.css']
})
export class CreateCustomProjectComponent implements OnInit {

  constructor(public passCustomData: CustomProjectService) { }

  ngOnInit() {
  }

  onCreateCustomProject(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    this.passCustomData.putCustomData({
      personName: formData.value.personName,
      personEmail: formData.value.personEmail,
      personProject: formData.value.persoProject
    });
  }

}
