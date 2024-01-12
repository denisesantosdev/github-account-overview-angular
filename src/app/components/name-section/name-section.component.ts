import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {
  @Input() user?: UserData
  githubUserIcon = fontAwesomeicons.faGithubAlt
  arrowLeftIcon = fontAwesomeicons.faArrowLeft

  constructor() { }

  ngOnInit(): void {
  }

}
