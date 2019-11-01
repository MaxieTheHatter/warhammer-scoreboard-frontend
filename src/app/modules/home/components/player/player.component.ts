import { Component, OnInit } from '@angular/core';
import {Player} from "../../../../shared/models/Player";
import {PlayerService} from "../../../../core/services/player/player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    })
  }

  addPlayer(player: Player) {
    this.playerService.addPlayer(player).subscribe(player => {
      this.players.push(player);
    })
  }
}
