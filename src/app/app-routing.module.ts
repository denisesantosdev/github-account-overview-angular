import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { RepoSectionComponent } from './components/repo-section/repo-section.component';

const routes: Routes = [
  {path: '', component: SearchPageComponent, pathMatch:'full'},
  {path: 'user', redirectTo: 'user/stats', pathMatch:'full'},
  {path: 'user', component: UserPageComponent, pathMatch:'prefix', children: [
    {path: 'stats', component: StatsSectionComponent, pathMatch:'full',},
    {path: 'repositories', component: RepoSectionComponent, pathMatch:'full',}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
