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

  constructor(private td: TodoService) { }

  ngOnInit() {
  }

  processForm(formData: NgForm) {
    this.td.putList(formData.value.todo);
    formData.resetForm();
  }

}
