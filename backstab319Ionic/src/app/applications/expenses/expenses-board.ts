import { Expenses } from './expenses';

export interface ExpensesBoard {
    boardName: string;
    boardSubtitle: string;
    boardExpenses: Expenses[];
}
