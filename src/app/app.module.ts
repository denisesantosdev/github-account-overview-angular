import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './pages/search-screen/search-screen.component';
import { NameSectionComponent } from './components/name-section/name-section.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { StatComponent } from './components/stat/stat.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { RepoSectionComponent } from './components/repo-section/repo-section.component';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    NameSectionComponent,
    TabsComponent,
    StatComponent,
    RepoCardComponent,
    StatsSectionComponent,
    RepoSectionComponent,
    UserScreenComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
