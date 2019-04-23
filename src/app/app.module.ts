import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//side nav bar
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProjectsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(), BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
