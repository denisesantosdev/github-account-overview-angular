import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NameSectionComponent } from './components/name-section/name-section.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StatComponent } from './components/stat/stat.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { RepoSectionComponent } from './components/repo-section/repo-section.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    UserPageComponent,
    NameSectionComponent,
    TabsComponent,
    StatComponent,
    RepoCardComponent,
    StatsSectionComponent,
    RepoSectionComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
