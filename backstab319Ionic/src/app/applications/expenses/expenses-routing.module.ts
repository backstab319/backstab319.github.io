import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesPage } from './expenses.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPage,
    children: [
      {
        path: 'view-expenses',
        children: [
          {
            path: '',
            loadChildren: () => import('./view-expenses/view-expenses.module').then( m => m.ViewExpensesPageModule)
          }
        ]
      },
      {
        path: 'expenses-board',
        children: [
          {
            path: '',
            loadChildren: () => import('./expense-board/expense-board.module').then( m => m.ExpenseBoardPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/applications/expenses/view-expenses',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesPageRoutingModule {}
