import { PlayersService } from './players.service';
import { Component, OnInit } from '@angular/core';
import { Team } from './model.player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  players: Team[] = [];
  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.getPlayers().subscribe((data) => {
      this.players = data;
    });

    console.log(this.players);
  }
}
