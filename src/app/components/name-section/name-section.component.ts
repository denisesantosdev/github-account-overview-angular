import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.css']
})
export class NameSectionComponent implements OnInit {
  @Input() user?: UserData

  constructor() { }

  ngOnInit(): void {
  }

}
