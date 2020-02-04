import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ColorSelectorComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ColorSelectorComponent
  ]
})
export class ToolsModule { }
