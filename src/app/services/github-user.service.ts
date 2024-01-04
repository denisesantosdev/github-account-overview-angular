import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserData } from '../models/userData';

@Injectable({
  providedIn: 'root',
})
export class GithubUserService {
  private baseURL: string = '';
  private userData: any;
  private shapedData!: UserData;

  constructor(private http: HttpClient) {
    this.baseURL = environment.gitHubApi;
  }

  fetchUser(user: string): Observable<any> {
    this.userData = this.http.get<any>(`${this.baseURL}${user}`);

    return this.userData;
  }

  shapeUserData(rawData: any) {
    this.shapedData = {
      login: rawData.login,
      created_at: rawData.created_at,
      followers: rawData.followers,
      following: rawData.following,
      name: rawData.name || 'Not provided',
      public_repos: rawData.public_repos,
      html_url: rawData.html_url,
    };

    return this.shapedData;
  }

  getUserData() {
    return this.userData;
  }

  getUserShapedData() {
    return this.shapedData;
  }
}
