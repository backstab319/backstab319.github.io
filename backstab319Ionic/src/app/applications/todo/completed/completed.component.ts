import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completed: Todo[] = [];

  constructor(
    private td: TodoService
  ) { }

  ngOnInit() {
    this.td.getUpdatedCompleted().subscribe(res => {
      this.completed = res;
    });
  }

  doReorder(ev: any) {
    this.td.reorderCompleted(ev.detail.complete(this.completed));
  }

  deleteCompleted(listIndex: number) {
    this.td.popCompleted(listIndex);
  }

  undoCompleted(indexNumber: number) {
    this.td.undoCompleted(indexNumber);
  }
}
