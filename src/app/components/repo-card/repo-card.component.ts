import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'src/app/shared/utils/format-date';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input() repoData: any
  createdAt: string = ''
  lastUpdateAt: string = ''

  constructor() { }

  ngOnInit(): void {
    //console.log(this.repoData.repo.created_at);
    this.createdAt = formatDate(this.repoData.repo.created_at)
    this.lastUpdateAt = formatDate(this.repoData.repo.pushed_at)
  }
}
