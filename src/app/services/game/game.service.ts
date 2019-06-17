import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl: string = 'http://localhost:8080/games/';
  serviceUrl: string = '';
  argumentUrl: string = '';

  constructor(private http: HttpClient) { }



  getGames(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.argumentUrl}`);
  }


}
