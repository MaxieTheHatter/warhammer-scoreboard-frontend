import { Component, OnInit } from '@angular/core';
import {Player} from "../../../models/Player";
import {PlayerService} from "../../../services/player/player.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    })
  }

}
