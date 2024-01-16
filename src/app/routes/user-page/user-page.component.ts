import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userRepoData } from 'src/app/models/userRepoData';
import { UserData } from 'src/app/models/userData';
import { GithubRepoService } from 'src/app/services/github-repo.service';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [],
})
export class UserPageComponent implements OnInit {
  user!: UserData;
  repos!: userRepoData[];
  apiResponse: boolean = true;
  searhQuery: any = '';
  errorText: string = '';
  itemsPerPage: number = 100;
  pageNumber: number = 1;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: GithubUserService,
    private repoService: GithubRepoService
  ) {
    this.activeRoute.params.subscribe((res) => {
      this.searhQuery = res;
    });
  }

  ngOnInit(): void {
    this.fetchUser();
    this.fetchRepos();
  }

  fetchUser() {
    this.service.fetchUser(this.searhQuery.username).subscribe({
      next: (res) => {
        this.user = this.service.shapeUserData(res);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) {
            this.apiResponse = false;
            this.errorText = 'User not found!';
          } else {
            this.apiResponse = false;
            this.errorText = 'An error occurred while fetching user data';
          }
        } else {
          this.apiResponse = false;
          this.errorText = 'An unexpected error occurred';
        }
      },
    });
  }

  fetchRepos() {
    this.repoService
      .fetchRepo(this.searhQuery.username, this.itemsPerPage, this.pageNumber)
      .subscribe({
        next: (res) => {
          this.repos = this.repoService.shapeRepoData(res);
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {
              this.apiResponse = false;
              this.errorText = 'User not found!';
            } else {
              this.apiResponse = false;
              this.errorText = 'An error occurred while fetching user data';
            }
          } else {
            this.apiResponse = false;
            this.errorText = 'An unexpected error occurred';
          }
        },
      });
  }
}
