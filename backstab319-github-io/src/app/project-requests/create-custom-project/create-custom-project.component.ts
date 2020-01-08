import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomProjectService } from '../../shared/custom-project.service';

@Component({
  selector: 'app-create-custom-project',
  templateUrl: './create-custom-project.component.html',
  styleUrls: ['./create-custom-project.component.css']
})
export class CreateCustomProjectComponent {

  constructor(public customProjectService: CustomProjectService) { }

  onCreateCustomProject(postedForm: NgForm) {
    if(postedForm.invalid) {
      return;
    }

    this.customProjectService.putData({
      personName: postedForm.value.personName,
      personEmail: postedForm.value.personEmail,
      personProject: postedForm.value.personProject
    });
    postedForm.resetForm();
  }

}
