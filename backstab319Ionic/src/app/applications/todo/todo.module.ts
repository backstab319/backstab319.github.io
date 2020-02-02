import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';
import { ToolbarButtonsComponent } from '../../shared/toolbar-buttons/toolbar-buttons.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule
  ],
  declarations: [TodoPage, ToolbarButtonsComponent, TodoListComponent, CompletedComponent]
})
export class TodoPageModule {}
