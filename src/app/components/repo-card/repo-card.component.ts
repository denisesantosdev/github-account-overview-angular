import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'src/app/shared/utils/format-date';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: []
})
export class RepoCardComponent implements OnInit {
  @Input() repoData: any
  createdAt: string = ''
  lastUpdateAt: string = ''
  forkIcon = fontAwesomeicons.faCodeFork
  watchersIcon = fontAwesomeicons.faEye
  starIcon = fontAwesomeicons.faStar

  constructor() { }

  ngOnInit(): void {
    this.createdAt = formatDate(this.repoData.repo.created_at)
    this.lastUpdateAt = formatDate(this.repoData.repo.pushed_at)
  }
}
