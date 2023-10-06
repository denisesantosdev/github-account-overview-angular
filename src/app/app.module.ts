import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { NameSectionComponent } from './name-section/name-section.component';
import { TabsComponent } from './tabs/tabs.component';
import { StatComponent } from './stat/stat.component';
import { RepoCardComponent } from './repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    NameSectionComponent,
    TabsComponent,
    StatComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
