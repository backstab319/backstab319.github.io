import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseBoardPageRoutingModule } from './expense-board-routing.module';

import { ExpenseBoardPage } from './expense-board.page';
import { ExpenseBoardPreviewComponent } from './expense-board-preview/expense-board-preview.component';
import { ToolsModule } from '../tools/tools.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseBoardPageRoutingModule,
    ToolsModule
  ],
  declarations: [ExpenseBoardPage, ExpenseBoardPreviewComponent]
})
export class ExpenseBoardPageModule {}
