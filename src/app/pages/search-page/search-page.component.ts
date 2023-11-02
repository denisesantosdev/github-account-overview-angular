import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchQuery: string = '';
  disabled: boolean = true;
  user?:UserData

  constructor(private service: GithubUserService) {}

  ngOnInit(): void {
    this.service.getUser('denisesantosdev').subscribe({
      next: (res) => {
        this.user = {
          login: res.login,
          created_at: res.created_at,
          followers: res.followers,
          following: res.following,
          name: res.name,
          public_repos: res.public_repos,
          html_url: res.html_url
        }

        console.log(this.user);
      },
      error: (err) => console.log(err),
    });
  }

  validateInput() {
    if (this.searchQuery === '') {
      this.disabled = true;
    } else {
      this.disabled = false;
      //console.log(this.searchQuery);
    }
  }
}
