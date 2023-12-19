import { Component, OnInit } from '@angular/core';
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
  selectedSort: string = 'Alphabetically';

  constructor(private service: GithubRepoService) {}

  ngOnInit(): void {
    this.service.getRepoData().subscribe({
      next: () => {
        this.repoData = this.service.getRepoShapedData();
        this.filteredRepos = this.repoData;
        this.sortRepos()
        //console.log(this.filteredRepos);
        //this.displayLanguageFilters();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  searchRepos() {
    this.filteredRepos = this.repoData.filter((repo) => {
      return repo.name.includes(this.repoSearchQuery);
    });
  }

  sortRepos() {
    console.log(this.selectedSort);
    //console.log(this.filteredRepos.sort());
    //if(this.selectedSort==='Alphabetically'){
    //}
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
    } /* else if (this.selectedSort === 'Alphabetically') {
      this.filteredRepos.sort((a, b) => {
        const name1: any = new Date(a.name);
        const name2: any = new Date(b.name);

        return name2 - name1;
      });
    } */
  }

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
