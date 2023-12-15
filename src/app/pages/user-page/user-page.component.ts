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
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  //APIResponse: any;
  user!: UserData;
  repos!: userRepoData[];
  searhQuery: any = '';

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
    this.service.fetchUser(this.searhQuery.username).subscribe({
      next: (res) => {
        this.user = this.service.shapeUserData(res);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) {
            // Handle 404 Not Found error (User not found)
            console.error('User not found!');
          } else {
            // Handle other HTTP errors
            console.error('An error occurred while fetching user data');
          }
        } else {
          // Handle non-HTTP errors
          console.error('An unexpected error occurred');
        }
      },
    });

    this.repoService.fetchRepo(this.searhQuery.username).subscribe({
      next: (res) => {
        this.repos = this.repoService.shapeRepoData(res)
        //console.log(this.repos);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) {
            // Handle 404 Not Found error (User not found)
            console.error('User not found!');
          } else {
            // Handle other HTTP errors
            console.error('An error occurred while fetching user data');
          }
        } else {
          // Handle non-HTTP errors
          console.error('An unexpected error occurred');
        }
      }
    })
  }
}
