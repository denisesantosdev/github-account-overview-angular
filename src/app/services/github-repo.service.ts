import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { repoData } from '../models/repoData';

@Injectable({
  providedIn: 'root',
})
export class GithubRepoService {
  private baseUrl: string = '';
  private shapedData: repoData | undefined;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.gitHubApi;
  }

  fetchRepo(user: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${user}/repos`);
  }

  shapeRepoData(rawData: any) {
    this.shapedData = rawData.map((element: any) => {
     return {
      name: element.name,
      description: element.description,
      html_url: element.html_url,
      created_at: element.created_at,
      updated_at: element.updated_at,
      pushed_at: element.pushed_at,
      forks_count: element.forks_count,
      stargazers_count: element.stargazers_count,
      watchers_count: element.watchers_count,
      size: element.size,
      language: element.language,
     }
    });

    return this.shapedData;
  }
}
