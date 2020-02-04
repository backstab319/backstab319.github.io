import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent implements OnInit {

  constructor() { }

  myPopOver: any = {
    header: 'Color',
    subheader: 'Pick one',
    message: 'Please pick a color'
  };

  ngOnInit() {}

}
