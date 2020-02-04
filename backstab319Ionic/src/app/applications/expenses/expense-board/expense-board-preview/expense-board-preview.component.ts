import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../expenses.service';
import { ExpensesBoard } from '../../expenses-board';

@Component({
  selector: 'app-expense-board-preview',
  templateUrl: './expense-board-preview.component.html',
  styleUrls: ['./expense-board-preview.component.scss'],
})
export class ExpenseBoardPreviewComponent implements OnInit {
  board: ExpensesBoard;

  constructor(private eb: ExpensesService) { }

  ngOnInit() {
    this.board = {
      boardName: '',
      boardSubtitle: '',
      boardExpenses: [],
      boardNameColor: '',
      boardSubtitleColor: ''
    };
    this.eb.getUpdatedCurrentBoard().subscribe(res => {
      this.board = res;
    });
  }

  addBoard() {
    this.eb.putIntoExpensesBoards(this.board);
    this.eb.deleteCurrentBoard();
  }

  delBoard() {
    this.board = {
      boardName: '',
      boardSubtitle: '',
      boardExpenses: [],
      boardNameColor: '',
      boardSubtitleColor: ''
    };
    this.eb.deleteCurrentBoard();
  }

  deleteExpense(index: number) {
    this.board.boardExpenses.splice(index, 1);
  }
}
