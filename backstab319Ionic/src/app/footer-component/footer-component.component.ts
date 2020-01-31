import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController } from '@ionic/angular';
import { SocialComponent } from './social/social.component';
import { GeneralService } from '../shared/general.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent implements OnInit {

  constructor(
    private navCtl: NavController,
    private menuCtl: MenuController,
    private pop: PopoverController,
    public gs: GeneralService
  ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any, detail: string) {
    const popover = await this.pop.create({
      component: SocialComponent,
      event: ev,
      translucent: true,
      componentProps: {
        showndetail: detail
      }
    });
    return await popover.present();
  }

  gotoHome() {
    this.navCtl.navigateRoot('/backstab319');
    this.menuCtl.close();
  }

}
