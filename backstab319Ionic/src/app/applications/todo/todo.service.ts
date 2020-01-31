import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = [];
  private updatedList = new Subject<Todo[]>();

  constructor() { }

  putList(item: Todo) {
    this.todoList.push(item);
    return [...this.todoList];
  }

  getUpdatedList() {
    return this.updatedList.subscribe;
  }

  getList() {
    return [...this.todoList];
  }
}
