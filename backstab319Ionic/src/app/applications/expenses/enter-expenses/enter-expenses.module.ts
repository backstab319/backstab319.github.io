import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterExpensesPageRoutingModule } from './enter-expenses-routing.module';

import { EnterExpensesPage } from './enter-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterExpensesPageRoutingModule
  ],
  declarations: [EnterExpensesPage]
})
export class EnterExpensesPageModule {}
