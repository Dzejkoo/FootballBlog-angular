import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'create-player', component: CreatePlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
