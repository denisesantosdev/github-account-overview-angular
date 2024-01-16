import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: []
})

export class ProfileSectionComponent implements OnInit {
  @Input() user?: UserData
  githubUserIcon = fontAwesomeicons.faGithubAlt
  arrowLeftIcon = fontAwesomeicons.faArrowLeft

  constructor() { }

  ngOnInit(): void {
  }

}
