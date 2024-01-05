import { Route } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { StatsSectionComponent } from 'src/app/components/stats-section/stats-section.component';
import { RepoSectionComponent } from 'src/app/components/repo-section/repo-section.component';

const UserPageRoutes: Route[] = [
  {
    path: 'user/:username',
    redirectTo: 'user/:username/stats',
    pathMatch: 'full',
  },
  {
    path: 'user/:username',
    component: UserPageComponent,
    pathMatch: 'prefix',
    children: [
      { path: 'stats', 
        component: StatsSectionComponent, 
        pathMatch: 'prefix' },
      {
        path: 'repositories',
        component: RepoSectionComponent,
        pathMatch: 'prefix',
      },
    ],
  },
];

export default UserPageRoutes;
