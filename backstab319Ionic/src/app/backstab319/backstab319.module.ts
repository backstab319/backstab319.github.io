import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Backstab319PageRoutingModule } from './backstab319-routing.module';

import { Backstab319Page } from './backstab319.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Backstab319PageRoutingModule
  ],
  declarations: [Backstab319Page]
})
export class Backstab319PageModule {}
