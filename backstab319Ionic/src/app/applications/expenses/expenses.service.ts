import { Injectable } from '@angular/core';
import { ExpensesBoard } from './expenses-board';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private expensesBoards: ExpensesBoard[] = [];
  private updatedExpensesBoards = new Subject<ExpensesBoard[]>();

  private currentBoard: ExpensesBoard;
  private updatedCurrentBoard = new Subject<ExpensesBoard>();

  constructor() {
  }

  putIntoExpensesBoards(board: ExpensesBoard) {
    this.expensesBoards.push(board);
    this.updatedExpensesBoards.next([...this.expensesBoards]);
  }

  getFromExpensesBoards() {
    return [...this.expensesBoards];
  }

  getUpdatedExpensesBoards() {
    return this.updatedExpensesBoards.asObservable();
  }

  // Current Board section
  putCurrentBoard(data: ExpensesBoard) {
    this.currentBoard = data;
    this.updatedCurrentBoard.next({...this.currentBoard});
  }

  getCurrentBoard() {
    return this.currentBoard;
  }

  getUpdatedCurrentBoard() {
    return this.updatedCurrentBoard.asObservable();
  }

  deleteCurrentBoard() {
    this.currentBoard = {
      boardName: '',
      boardExpenses: [],
      boardSubtitle: ''
    };
    this.updatedCurrentBoard.next({...this.currentBoard});
    console.log({...this.currentBoard});
  }
}
