import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseBoardPageRoutingModule } from './expense-board-routing.module';

import { ExpenseBoardPage } from './expense-board.page';
import { ExpenseBoardPreviewComponent } from './expense-board-preview/expense-board-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseBoardPageRoutingModule
  ],
  declarations: [ExpenseBoardPage, ExpenseBoardPreviewComponent]
})
export class ExpenseBoardPageModule {}
