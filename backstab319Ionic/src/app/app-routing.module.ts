import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'backstab319', pathMatch: 'full' },
  {
    path: 'backstab319',
    loadChildren: () => import('./backstab319/backstab319.module').then( m => m.Backstab319PageModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then( m => m.ApplicationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
