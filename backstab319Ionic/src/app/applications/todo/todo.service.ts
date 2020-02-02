import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = [];
  private completedList: Todo[] = [];
  private updatedList = new Subject<Todo[]>();
  private updatedCompleted = new Subject<Todo[]>();

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

  reorderCompleted(itemArray: Todo[]) {
    this.completedList = itemArray;
    this.updatedCompleted.next([...this.completedList]);
  }

  putCompleted(itemIndex: number) {
    const cl: Todo = this.todoList[itemIndex];
    this.completedList.push(cl);
    this.updatedCompleted.next([...this.completedList]);
    this.delCompletedFromTodo(itemIndex);
  }

  getCompleted() {
    return [...this.completedList];
  }

  getUpdatedCompleted() {
    return this.updatedCompleted.asObservable();
  }

  delCompletedFromTodo(index: number) {
    this.todoList.splice(index, 1);
    this.updatedList.next([...this.todoList]);
  }

  popCompleted(itemIndex: number) {
    this.completedList.splice(itemIndex, 1);
    this.updatedCompleted.next([...this.completedList]);
  }

  deleteCompleted(index: number) {
    this.completedList.splice(index, 1);
    this.updatedCompleted.next([...this.completedList]);
  }

  undoCompleted(index: number) {
    const cl: Todo = this.completedList[index];
    this.putList(cl);
    this.deleteCompleted(index);
  }
}
