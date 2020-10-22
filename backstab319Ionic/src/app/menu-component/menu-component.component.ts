import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss'],
})
export class MenuComponentComponent implements OnInit {

  constructor(
    private menuCtl: MenuController,
    private navCtl: NavController
  ) { }

  ngOnInit() {}

  gotoPage(pageName: string) {
    this.menuCtl.close();
    // Exception for assignments
    if (pageName == 'assignments') {
      this.gotoAssignmentPage();
      return;
    }
    this.navCtl.navigateForward(['/', 'backstab319', pageName]);
  }

  gotoAssignmentPage() {
    this.navCtl.navigateForward('/applications/assignments');
  }

}
