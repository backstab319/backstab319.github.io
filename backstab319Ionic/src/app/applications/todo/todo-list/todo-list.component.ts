import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  myList: Todo[];

  constructor(private td: TodoService) { }

  ngOnInit() {
    this.myList = this.td.getUpdatedList.subscribe();
  }

}
