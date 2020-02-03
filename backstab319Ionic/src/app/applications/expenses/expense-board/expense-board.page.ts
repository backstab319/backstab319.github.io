import { Component, OnInit } from '@angular/core';
import { ExpensesBoard } from '../expenses-board';
import { ExpensesService } from '../expenses.service';
import { NgForm } from '@angular/forms';
import { Expenses } from '../expenses';

@Component({
  selector: 'app-expense-board',
  templateUrl: './expense-board.page.html',
  styleUrls: ['./expense-board.page.scss'],
})
export class ExpenseBoardPage implements OnInit {
  boards: ExpensesBoard[] = [];
  expenses: Expenses[] = [];

  currentBoard: ExpensesBoard;
  dispwhat = 'banner';

  constructor(private eb: ExpensesService) { }

  ngOnInit() {
    this.eb.getUpdatedExpensesBoards().subscribe(res => {
      this.boards = res;
    });
    this.eb.getUpdatedCurrentBoard().subscribe(res => {
      this.currentBoard = res;
    });
  }

  onSubmitBoardForm(boardData: NgForm) {
    this.eb.putCurrentBoard({
      boardName: boardData.value.boardTitle,
      boardSubtitle: boardData.value.boardSubtitle,
      boardExpenses: this.expenses
    });
    boardData.resetForm();
    this.expenses = [];
    this.dispwhat = 'notbanner';
  }

  ongSubmitExpensesForm(expensesData: NgForm) {
    this.expenses.push({
      expensesName: expensesData.value.expenseName,
      expensesValue: expensesData.value.expenseAmount
    });
    expensesData.resetForm();
  }

  selectDisp(data: string) {
    this.dispwhat = data;
  }

}
