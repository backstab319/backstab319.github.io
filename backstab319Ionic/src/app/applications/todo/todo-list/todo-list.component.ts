import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;
  myList: Todo[];

  constructor(private td: TodoService) { }

  ngOnInit() {
    this.td.getUpdatedList().subscribe(res => {
      this.myList = res;
    }, err => {
      console.log(err);
    });
  }

  delete(listIndex: number) {
    this.td.popItem(listIndex);
  }

  doReorder(ev: any) {
    this.td.reorderItem(ev.detail.complete(this.myList));
  }

  markDone(noteId: string) {
    document.getElementById(noteId).style = 'text-decoration: line-through';
  }
}
