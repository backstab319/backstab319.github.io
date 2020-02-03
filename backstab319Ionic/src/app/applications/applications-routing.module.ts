import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsPage } from './applications.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsPage
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class ApplicationsPageRoutingModule {}
