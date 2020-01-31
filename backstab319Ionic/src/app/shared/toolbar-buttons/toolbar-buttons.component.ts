import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss'],
})
export class ToolbarButtonsComponent implements OnInit {
  @Input() back: string;

  constructor() { }

  ngOnInit() {}

}
