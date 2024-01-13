import { Component, Input, OnInit } from '@angular/core';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() errorText: string = '';
  sadFaceIcon = fontAwesomeicons.faSadCry
  arrowLeftIcon = fontAwesomeicons.faArrowLeft
  
  constructor() {}

  ngOnInit(): void {}
}
