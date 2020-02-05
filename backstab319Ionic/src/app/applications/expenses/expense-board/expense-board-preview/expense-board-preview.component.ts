import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../expenses.service';
import { AlertController } from '@ionic/angular';
import { ExpensesBoard } from '../../expenses-board';

@Component({
  selector: 'app-expense-board-preview',
  templateUrl: './expense-board-preview.component.html',
  styleUrls: ['./expense-board-preview.component.scss'],
})
export class ExpenseBoardPreviewComponent implements OnInit {
  board: ExpensesBoard;

  constructor(
    private eb: ExpensesService,
    private alertController: AlertController
    ) { }

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

  async raiseAddBoard() {
    const myAddAlert = await this.alertController.create({
      header: 'Are you sure?',
      subHeader: 'Add this board?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          role: 'ok',
          handler: () => {
            this.addBoard();
          }
        }
      ]
    });
    await myAddAlert.present();
  }

  async raiseDelBoard() {
    const myDelAlert = await this.alertController.create({
      header: 'Are you sure?',
      subHeader: 'Delete this board?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          role: 'ok',
          handler: () => {
            this.delBoard();
          }
        }
      ]
    });
    await myDelAlert.present();
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
