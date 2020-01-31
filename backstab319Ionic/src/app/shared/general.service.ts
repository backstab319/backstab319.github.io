import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private router: Router,
    private menuCtl: MenuController
  ) { }

  menuToggle() {
    this.menuCtl.toggle();
  }

  gotoPage(path: string) {
    this.router.navigateByUrl(path);
    this.menuCtl.close();
  }

  gotoAbs(path: string) {
    this.router.navigateByUrl(path);
  }

}
