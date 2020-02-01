import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  pageLink = '/applications';

  myInterface: any = {
    header: 'Color',
    subheader: 'Select a color',
    message: 'Select a color for your note'
  };

  constructor(private td: TodoService) { }

  ngOnInit() {
  }

  processForm(formData: NgForm) {
    this.td.putList({
      todoText: formData.value.todo,
      todoColor: formData.value.color
    });
    formData.resetForm();
  }

}
