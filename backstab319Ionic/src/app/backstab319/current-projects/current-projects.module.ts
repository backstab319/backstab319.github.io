import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentProjectsPageRoutingModule } from './current-projects-routing.module';

import { CurrentProjectsPage } from './current-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentProjectsPageRoutingModule
  ],
  declarations: [CurrentProjectsPage]
})
export class CurrentProjectsPageModule {}
