import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  pageLink = '/applications';
  myNote: Todo[] = [];
  completedNote: Todo[] = [];

  myInterface: any = {
    header: 'Color',
    subheader: 'Select a color',
    message: 'Select a color for your note'
  };

  constructor(
    private td: TodoService,
    private alCtl: AlertController
    ) { }

  async presentAlert() {
    const myAlert = await this.alCtl.create({
      header: 'Exists',
      message: 'Note already exists',
      buttons: ['OK']
    });
    await myAlert.present();
  }

  ngOnInit() {
    this.td.getUpdatedList().subscribe(res => {
      this.myNote = res;
    });
    this.td.getUpdatedCompleted().subscribe(res => {
      this.completedNote = res;
    });
  }

  processForm(formData: NgForm) {
    const localNotes = [];
    if (this.myNote.length > 0) {
      this.myNote.forEach(val => {
        localNotes.push(val.todoText);
      });
    }
    if (localNotes.includes(formData.value.todo)) {
      this.presentAlert();
      formData.resetForm();
      return;
    }
    this.td.putList({
      todoText: formData.value.todo,
      todoColor: formData.value.color
    });
    formData.resetForm();
  }

}
