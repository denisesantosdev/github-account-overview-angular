import { Component, OnInit } from '@angular/core';
import { fontAwesomeicons } from 'src/app/shared/data/fa-icons';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  searchQuery: string = '';
  disabled: boolean = true;
  githubIcon = fontAwesomeicons.faGithub

  constructor() {}

  ngOnInit(): void {
    
  }

  enableButton() {
    if (this.searchQuery === '') {
      this.disabled = true;
    } else {
      this.disabled = false;
      //console.log(this.searchQuery);
    }
  }

  generateUserRoute():string{
    return `user/${this.searchQuery}`
  }
}
