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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsPageRoutingModule {}
