import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { ExpensesBoard } from '../expenses-board';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.page.html',
  styleUrls: ['./view-expenses.page.scss'],
})
export class ViewExpensesPage implements OnInit {
  boards: ExpensesBoard[] = [];

  constructor(private es: ExpensesService) { }

  ngOnInit() {
    this.es.getUpdatedExpensesBoards().subscribe(res => {
      this.boards = res;
    });
  }

}
