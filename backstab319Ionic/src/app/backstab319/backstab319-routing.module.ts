import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Backstab319Page } from './backstab319.page';

const routes: Routes = [
  {
    path: '',
    component: Backstab319Page
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'current-projects',
    loadChildren: () => import('./current-projects/current-projects.module').then( m => m.CurrentProjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Backstab319PageRoutingModule {}
