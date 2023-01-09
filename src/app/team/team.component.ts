import { PlayersService } from './players.service';
import { Component, OnInit } from '@angular/core';
import { Team } from './model.player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  player: Team = [];
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.getPlayers().subscribe((data) => {
      this.player = data;
    });

    console.log(this.player);
  }
}
