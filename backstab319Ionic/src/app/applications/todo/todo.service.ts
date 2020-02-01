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
    this.updatedList.next([...this.todoList]);
  }

  getUpdatedList() {
    return this.updatedList.asObservable();
  }

  getList() {
    return [...this.todoList];
  }

  popItem(itemIndex: number) {
    this.todoList.splice(itemIndex, 1);
    this.updatedList.next([...this.todoList]);
  }

  reorderItem(itemArray: Todo[]) {
    this.todoList = itemArray;
    this.updatedList.next([...this.todoList]);
  }
}
