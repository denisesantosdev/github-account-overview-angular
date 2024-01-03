import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { userRepoData } from 'src/app/models/userRepoData';
import { GithubRepoService } from 'src/app/services/github-repo.service';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.css'],
})
export class RepoSectionComponent implements OnInit {
  repoData!: userRepoData[];
  filteredRepos!: userRepoData[];
  repoSearchQuery: string = '';
  selectedSort: string = 'Newest';
  selectedLanguage!: string;
  languages: string[] = [];
  languageCount: number = 0;

  constructor(private service: GithubRepoService) {}

  ngOnInit(): void {
    this.service.getRepoData().subscribe({
      next: () => {
        this.repoData = this.service.getRepoShapedData();
        this.filteredRepos = this.repoData;
        this.sortRepos();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  receiveSearchQuery(query: string) {
    this.repoSearchQuery = query;
  }

  receiveSelectedLanguage(language: string) {
    this.selectedLanguage = language;
    console.log(this.selectedLanguage);
  }

  searchRepos() {
    this.filteredRepos = this.repoData.filter((repo) => {
      return repo.name.includes(this.repoSearchQuery);
    });
  }

  filterByLanguage() {
    this.filteredRepos = this.repoData.filter((repo) => {
      return repo.language === this.selectedLanguage;
    });

    if (this.filteredRepos.length === 0) {
      this.filteredRepos = this.repoData;
    }
  }

  sortRepos() {
    if (this.selectedSort === 'Oldest') {
      this.filteredRepos.sort((a, b) => {
        const date1: any = new Date(a.created_at);
        const date2: any = new Date(b.created_at);

        return date1 - date2;
      });
    } else if (this.selectedSort === 'Newest') {
      this.filteredRepos.sort((a, b) => {
        const date1: any = new Date(a.created_at);
        const date2: any = new Date(b.created_at);

        return date2 - date1;
      });
    } else {
      this.filteredRepos.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    }
  }

  /* generateLanguagesFilters() {
    this.languages = this.repoData
      .map((repo) => {
        return repo.language;
      })
      .filter((value, index, array) => array.indexOf(value) === index);

      this.languageCount = this.filteredRepos.length
  }

  countOccurrences(target: any) {
    return this.repoData
      .map((repo) => {
        return repo.language;
      })
      .filter((item) => item === target).length;
  }

  filterByLanguage(e: any) {
    this.SelectedLanguage = e.target.id;

    this.filteredRepos = this.repoData.filter((repo) => {
      return repo.language === this.SelectedLanguage;
    });

    if (this.filteredRepos.length === 0) {
      this.filteredRepos = this.repoData;
    }
  } */
  /* generate language button filters 
    map repoData return repo.language
  
  

  displayLanguageFilters() {
    // find all the unique language elements 
    // filter => find 
    let languages = this.repoData
      .map((repo) => {
        return repo.language;
      })
      .filter((value, index, array) => array.indexOf(value) === index);

    return languages;
  }

  
    filter repo.language === (language)
    return filteredRepos.length
  */
}
