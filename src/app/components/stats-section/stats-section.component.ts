import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/userData';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css']
})
export class StatsSectionComponent implements OnInit {
  user?: UserData;

  constructor(private service: GithubUserService) { }

  ngOnInit(): void {
    this.service.getUserData().subscribe({
      next: (res: any) => {
      this.user = this.service.getUserShapedData()
      //console.log(this.user);
      },
    });
  }
  

}
