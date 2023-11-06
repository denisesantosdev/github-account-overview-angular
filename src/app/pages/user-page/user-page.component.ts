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
       this.user = this.service.shapeUserData(res)
       console.log(this.user);
      },
      error: (err) => console.log(err),
    });
  }
}
