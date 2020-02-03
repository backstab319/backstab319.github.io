import { Component, OnInit, Input, Output } from '@angular/core';
import { ExpensesService } from '../../expenses.service';
import { ExpensesBoard } from '../../expenses-board';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-board-preview',
  templateUrl: './expense-board-preview.component.html',
  styleUrls: ['./expense-board-preview.component.scss'],
})
export class ExpenseBoardPreviewComponent implements OnInit {
  board: ExpensesBoard;
  @Output() dispwhat = new EventEmitter<string>();
  @Input() disp: string;

  constructor(private eb: ExpensesService) { }

  ngOnInit() {
    this.eb.getUpdatedCurrentBoard().subscribe(res => {
      this.board = res;
    });
  }

  addBoard() {
    this.eb.putIntoExpensesBoards(this.board);
    this.onDispBanner();
  }

  delBoard() {
    this.eb.deleteCurrentBoard();
    this.disp = 'notbanner';
  }

  onDispBanner() {
    this.dispwhat.emit('banner');
  }
}
