import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-backstab319',
  templateUrl: './backstab319.page.html',
  styleUrls: ['./backstab319.page.scss'],
})
export class Backstab319Page implements OnInit {

  constructor(
    private menuCtl: MenuController,
    private navCtl: NavController
  ) { }

  ngOnInit() {
  }

  gotoPage(pageName: string) {
    this.menuCtl.close();
    this.navCtl.navigateForward(['/', 'backstab319', pageName]);
  }

}
