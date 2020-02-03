import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterExpensesPage } from './enter-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: EnterExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterExpensesPageRoutingModule {}
