import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  private baseUrl:string =  ''
  private repoData: any

  constructor(private http: HttpClient) {
    this.baseUrl = environment.gitHubApi
   }

   fetchRepo(user:string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${user}/repos`);
   }

}
