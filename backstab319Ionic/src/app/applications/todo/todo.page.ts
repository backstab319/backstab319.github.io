import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  pageLink = '/applications';

  constructor() { }

  ngOnInit() {
  }

  processForm(formData: NgForm) {
    console.log(formData.value.todo);
    formData.resetForm();
  }

}
