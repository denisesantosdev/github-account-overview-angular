import { Component, OnInit } from '@angular/core';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  userSearchQuery: string = '';
  disabled: boolean = true;
  githubIcon = fontAwesomeicons.faGithub

  constructor() {}

  ngOnInit(): void {
    
  }

  receiveSearchQuery(query: string) {
    this.userSearchQuery = query
  }

  enableButton() {
    if (this.userSearchQuery === '') {
      this.disabled = true;
    } else {
      this.disabled = false;
      //console.log(this.userSearchQuery);
    }
  }

  generateUserRoute():string{
    return `user/${this.userSearchQuery}`
  }
}
