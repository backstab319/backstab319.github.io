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

  constructor(private eb: ExpensesService) { }

  ngOnInit() {
    this.currentBoard = {
      boardName: '',
      boardSubtitle: '',
      boardExpenses: [],
      boardNameColor: '',
      boardSubtitleColor: ''
    };
    this.eb.getUpdatedExpensesBoards().subscribe(res => {
      this.boards = res;
    });
    this.eb.getUpdatedCurrentBoard().subscribe(res => {
      this.currentBoard = res;
      this.expenses = res.boardExpenses;
    });
  }

  onSubmitBoardForm(boardData: NgForm) {
    this.eb.putCurrentBoard({
      boardName: boardData.value.boardTitle,
      boardSubtitle: boardData.value.boardSubtitle,
      boardExpenses: this.expenses,
      boardNameColor: '',
      boardSubtitleColor: ''
    });
    boardData.resetForm();
  }

  ongSubmitExpensesForm(expensesData: NgForm) {
    this.expenses.push({
      expensesName: expensesData.value.expenseName,
      expensesValue: expensesData.value.expenseAmount,
      expensesColor: ''
    });
    if (this.currentBoard) {
      this.eb.putCurrentBoard(this.currentBoard = {
        boardName: this.currentBoard.boardName,
        boardSubtitle: this.currentBoard.boardSubtitle,
        boardExpenses: this.expenses,
        boardNameColor: '',
        boardSubtitleColor: ''
      });
    }
    expensesData.resetForm();
  }

}
