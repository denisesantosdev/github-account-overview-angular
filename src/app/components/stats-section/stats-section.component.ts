import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css'],
})
export class StatsSectionComponent implements OnInit {
  user?: UserData;
  stats: any[] = [];

  constructor(private service: GithubUserService) {}

  ngOnInit(): void {
    this.service.getUserData().subscribe({
      next: (res: any) => {
        this.user = this.service.getUserShapedData();
        this.stats = [
          {
            stat: this.user?.followers,
            statName: "Followers",
            statIcon: 'Icon',
          },
          {
            stat: this.user?.following,
            statName: "Following",
            statIcon: 'Icon',
          },
          {
            stat: this.user?.created_at,
            statName: "Created At",
            statIcon: 'Icon',
          },
          {
            stat: this.user?.public_repos,
            statName: "Number of Repos",
            statIcon: 'Icon',
          },
        ];
      },
    });
  }
}
