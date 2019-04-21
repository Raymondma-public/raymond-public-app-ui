import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {ProjectsComponent} from './components/projects/projects.component';
const routes: Routes = [
  {path: 'projects' , component: ProjectsComponent},
  {path: '**' , component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
