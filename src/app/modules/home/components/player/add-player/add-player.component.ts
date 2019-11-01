import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArmyResource} from "../../../../../shared/models/ArmyResource";
import {Player} from "../../../../../shared/models/Player";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Output() addPlayer: EventEmitter<any> = new EventEmitter();

  player: Player;
  resource;
  resourceAmount: number;
  playerName: string;
  playerArmy: string;
  resourceType: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let resource = {};
    if (this.resourceType == null) {
      resource = {
        type: 'none',
        resource: 0
      }
    } else {
      resource = {
        type: this.resourceType,
        resource: this.resourceAmount
      }
    }

    let player = {
      name: this.playerName,
      army: this.playerArmy,
      armyResource: resource,
      score: 0
    }

    this.addPlayer.emit(player);
  }
}
