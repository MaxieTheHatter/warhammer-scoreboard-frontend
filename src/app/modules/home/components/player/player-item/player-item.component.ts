import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from "../../../../../shared/models/Player";
import {PlayerService} from "../../../../../core/services/player/player.service";

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: Player;
  @Output() deletePlayer: EventEmitter<Player> = new EventEmitter();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      player: true,
    }
    return classes;
  }

}
