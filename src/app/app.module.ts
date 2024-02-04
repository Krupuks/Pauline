import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { PhotographyComponent } from './photography/photography.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    VisionComponent,
    PhotographyComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    
      {path: "home", component: HomeComponent},
      {path: "projects", component: ProjectsComponent},
      {path: "vision", component: VisionComponent},
      {path: "photography", component: PhotographyComponent},
      {path: "contact", component: ContactComponent},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
