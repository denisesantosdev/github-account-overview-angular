import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { userRepoData } from 'src/app/models/userRepoData';
import { GithubRepoService } from 'src/app/services/github-repo.service';

@Component({
  selector: 'app-languages-filter',
  templateUrl: './languages-filter.component.html',
  styleUrls: ['./languages-filter.component.css'],
})
export class LanguagesFilterComponent implements OnInit {
  @Output() languageEvent = new EventEmitter<string>();
  repoData!: userRepoData[];
  selectedLanguage!: string;
  languages: string[] = [];
  languageCount: number = 0;

  constructor(private service: GithubRepoService) {}

  ngOnInit(): void {
    this.service.getRepoData().subscribe({
      next: () => {
        this.repoData = this.service.getRepoShapedData();
        this.generateLanguagesFilters();
        this.languageCount = this.repoData.length;
        console.log(this.repoData);
        console.log(this.repoData.length);
      },
    });
  }

  generateLanguagesFilters() {
    this.languages = this.repoData
      .map((repo) => {
        return repo.language;
      })
      .filter((value, index, array) => array.indexOf(value) === index);
  }

  countLanguageOccurrences(target: any) {
    return this.repoData
      .map((repo) => {
        return repo.language;
      })
      .filter((item) => item === target).length;
  }

  getSelectedLanguage(e: any) {
    this.selectedLanguage = e.target.value;
    this.sendSelectedLanguage();
  }

  sendSelectedLanguage() {
    this.languageEvent.emit(this.selectedLanguage);
  }
}
