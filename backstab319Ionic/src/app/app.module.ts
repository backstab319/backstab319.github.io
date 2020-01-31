import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SocialComponent } from './footer-component/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    FooterComponentComponent,
    SocialComponent
  ],
  entryComponents: [SocialComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
