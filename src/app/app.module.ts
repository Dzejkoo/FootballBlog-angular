import { PlayersService } from './team/players.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerComponent } from './team/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TeamComponent,
    CreatePlayerComponent,
    PlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
