import { ArsenalPlayers } from 'src/assets/data/players-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  data = ArsenalPlayers;

  getPlayers(): Observable<any> {
    return of(this.data);
  }
}
