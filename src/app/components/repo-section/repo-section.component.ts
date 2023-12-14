import { Component, OnInit } from '@angular/core';
import { repoData } from 'src/app/models/repoData';
import { GithubRepoService } from 'src/app/services/github-repo.service';

@Component({
  selector: 'app-repo-section',
  templateUrl: './repo-section.component.html',
  styleUrls: ['./repo-section.component.css']
})
export class RepoSectionComponent implements OnInit {
  repoData: any

  constructor(private service: GithubRepoService) { }

  ngOnInit(): void {
    this.service.getRepoData().subscribe({
      next: (res: any) =>{
        this.repoData = this.service.getRepoShapedData()
        console.log(this.repoData);
      }
    })
  }

}
