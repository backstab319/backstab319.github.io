import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatInput } from '@angular/material/input';
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
import { MatTabsModule } from '@angular/material/tabs';
import { CustomProjectComponent } from './project-requests/custom-project/custom-project.component';
import { FixProjectComponent } from './project-requests/fix-project/fix-project.component';
import { CreateCustomProjectComponent } from './project-requests/create-custom-project/create-custom-project.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

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
    MainContentComponent,
    CustomProjectComponent,
    FixProjectComponent,
    CreateCustomProjectComponent
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
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
