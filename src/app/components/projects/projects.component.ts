import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

}
