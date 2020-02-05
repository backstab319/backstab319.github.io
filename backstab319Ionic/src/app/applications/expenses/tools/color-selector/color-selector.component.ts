import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent implements OnInit {
  @Output() color = new EventEmitter<string>();

  constructor() { }

  myPopOver: any = {
    header: 'Color',
    subheader: 'Pick one',
    message: 'Please pick a color'
  };

  ngOnInit() {}

  dispColor(color: string) {
    this.color.emit(color);
  }

}
