import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentProjectsPage } from './current-projects.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentProjectsPageRoutingModule {}
