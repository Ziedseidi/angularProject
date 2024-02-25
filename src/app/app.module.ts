import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { StandingsComponent } from './components/standings/standings.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PlayerComponent,
    TeamsComponent,
    MatchesComponent,
    BlogComponent,
    CupEventComponent,
    StandingsComponent,
    ResultComponent,
    NewsComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    SingupComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AddTeamComponent,
    EditTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    BannerComponent,
    MatchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
