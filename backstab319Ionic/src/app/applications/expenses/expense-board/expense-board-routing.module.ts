import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseBoardPage } from './expense-board.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseBoardPageRoutingModule {}
