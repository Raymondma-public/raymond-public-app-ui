import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {IndexComponent} from './components/index/index.component';
import {ProjectsComponent} from './components/projects/projects.component';

//boostrap 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';

//http
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SafePipe } from './utils/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProjectsComponent,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    ProjectDetailComponent,
    SafePipe
  ],
  imports: [
    NgbAlertModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
