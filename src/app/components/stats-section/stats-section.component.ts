import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { GithubUserService } from 'src/app/services/github-user.service';

import { formatDate } from 'src/app/shared/utils/format-date';

import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';


@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: [],
})
export class StatsSectionComponent implements OnInit {
  user!: UserData;
  stats!: any[];

  constructor(private service: GithubUserService) {}

  ngOnInit(): void {
    this.service.getUserData().subscribe({
      next: () => {
        this.user = this.service.getUserShapedData();

        this.stats = [
          {
            stat: this.user.followers,
            statName: 'Followers',
            statIcon: fontAwesomeicons.faUser,
          },
          {
            stat: this.user.following,
            statName: 'Following',
            statIcon: fontAwesomeicons.faUser,
          },
          {
            stat: formatDate(this.user.created_at),
            statName: 'Created At',
            statIcon: fontAwesomeicons.faClock,
          },
          {
            stat: this.user.public_repos,
            statName: 'Number of Public Repos',
            statIcon: fontAwesomeicons.faCode,
          },
        ];
      },
      error: (err: any) => {
        console.error('Error fetching user data:', err);
      },
    });
  }
}
