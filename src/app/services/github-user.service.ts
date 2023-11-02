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
  private userData: UserData | any;

  constructor(private http: HttpClient) {
    this.baseURL = environment.gitHubApi;
  }

  getUser(user: string): Observable<UserData> {
    this.userData = this
                    .http
                    .get<UserData>
                    (`${this.baseURL}${user}`);

    console.log(user);
    console.log(this.baseURL);
    console.log(this.userData);

    return this.userData;
  }
}
