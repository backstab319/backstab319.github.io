import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { ExpensesBoard } from '../expenses-board';
import { Expenses } from '../expenses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.page.html',
  styleUrls: ['./view-expenses.page.scss'],
})
export class ViewExpensesPage implements OnInit {
  boards: ExpensesBoard[] = [];
  currentBoard: ExpensesBoard;
  total = 0;

  constructor(
    private es: ExpensesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.es.getUpdatedExpensesBoards().subscribe(res => this.boards = res);
    this.es.getUpdatedCurrentBoard().subscribe(res => this.currentBoard = res);
  }

  boardEdit = (itemIndex: number) => {
    this.es.putCurrentBoard(this.boards[itemIndex]);
    this.es.deleteFromExpensesBoards(itemIndex);
    this.router.navigateByUrl('applications/expenses/expenses-board');
  }

  boardDelete = (itemIndex: number) => this.es.deleteFromExpensesBoards(itemIndex);

  boardTotal = (itemIndex: number, data: Expenses[]) => {
    document.getElementById(itemIndex.toString()).hidden = !document.getElementById(itemIndex.toString()).hidden;
    data.map((val) => this.total+=val.expensesValue);
    document.getElementById(itemIndex.toString() + 'total').innerHTML = this.total.toString();
    this.total = 0;
  }

}
