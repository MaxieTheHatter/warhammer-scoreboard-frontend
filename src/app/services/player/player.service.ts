import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../models/Player";

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl: string = 'http://localhost:8080/players';

  constructor(private http: HttpClient) { }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.baseUrl, player, httpOptions);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<any>(this.baseUrl);
  }

  updatePlayers(players: Player[]): Observable<Player[]> {
    return this.http.put<Player[]>(this.baseUrl, players, httpOptions);
  }
}
