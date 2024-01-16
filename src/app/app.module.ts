import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SearchPageComponent } from './routes/search-page/search-page.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { RepoSectionComponent } from './components/repo-section/repo-section.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserPageComponent } from './routes/user-page/user-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { LanguagesFilterComponent } from './components/languages-filter/languages-filter.component';
import { SortReposComponent } from './components/sort-repos/sort-repos.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    UserPageComponent,
    ProfileSectionComponent,
    TabsComponent,
    RepoCardComponent,
    StatsSectionComponent,
    RepoSectionComponent,
    LoaderComponent,
    SearchComponent,
    LanguagesFilterComponent,
    SortReposComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
