import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/userData';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  APIResponse: any;
  user?: UserData;
  searhQuery: any = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private service: GithubUserService
  ) {
    this.activeRoute.params.subscribe((res) => {
      this.searhQuery = res;
    });
  }

  ngOnInit(): void {
    this.service.fetchUser(this.searhQuery.username).subscribe({
      next: (res) => {
        console.log(res);
        this.user = this.service.shapeUserData(res);
        console.log(this.user);
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
  }
}
