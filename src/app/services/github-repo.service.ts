import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userRepoData } from '../models/userRepoData';

@Injectable({
  providedIn: 'root',
})
export class GithubRepoService {
  private baseUrl: string = '';
  private repoData: any;
  private shapedData!: userRepoData[];

  constructor(private http: HttpClient) {
    this.baseUrl = environment.gitHubApi;
  }

  fetchRepo(
    user: string,
    itemsPerPage: number,
    pageNumber: number
  ): Observable<any> {
    this.repoData = this.http.get<any>(`${this.baseUrl}${user}/repos?per_page=${itemsPerPage}&page=${pageNumber}`);

    return this.repoData;
  }

  shapeRepoData(rawData: any) {
    this.shapedData = rawData.map((element: userRepoData) => {
      return {
        name: element.name,
        description: element.description || 'Not provided',
        html_url: element.html_url,
        created_at: element.created_at,
        updated_at: element.updated_at,
        pushed_at: element.pushed_at,
        forks_count: element.forks_count,
        stargazers_count: element.stargazers_count,
        watchers_count: element.watchers_count,
        size: element.size,
        language: element.language || 'Not found',
      };
    });

    return this.shapedData;
  }

  getRepoData() {
    return this.repoData;
  }

  getRepoShapedData() {
    return this.shapedData;
  }
}
