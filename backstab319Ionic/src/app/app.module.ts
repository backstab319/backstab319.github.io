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
import { ChatWebAppMenuComponent } from './applications/chat-web-app/tools/chat-web-app-menu/chat-web-app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    FooterComponentComponent,
    SocialComponent,
    ChatWebAppMenuComponent
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
