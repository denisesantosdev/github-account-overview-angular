import { Component, OnInit } from '@angular/core';
import { userRepoData } from 'src/app/models/userRepoData';
import { GithubRepoService } from 'src/app/services/github-repo.service';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.css']
})
export class RepoSectionComponent implements OnInit {
  repoData!: userRepoData[]

  constructor(private service: GithubRepoService) { }

  ngOnInit(): void {
    this.service.getRepoData().subscribe({
      next: () =>{
        this.repoData = this.service.getRepoShapedData()
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
