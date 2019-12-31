import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProjectComponent } from './about/project/project.component';
import { DeveloperComponent } from './about/developer/developer.component';
import { MainContentComponent } from './frontPage/main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

const myRoutes: Routes = [
  {path: '', component: MainContentComponent, pathMatch: 'full'},
  {path: 'aboutProject', component: ProjectComponent, pathMatch: 'full'},
  {path: 'aboutDeveloper', component: DeveloperComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProjectComponent,
    DeveloperComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
