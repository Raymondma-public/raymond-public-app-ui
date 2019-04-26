import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8080';
  
  constructor(private httpClient: HttpClient) {}

  public getProjects(){
    return this.httpClient.get<Project[]>(`${this.apiURL}/projects`);
  }
}
