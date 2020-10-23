import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { defaultRequestConfig } from '@shared/constants/defaults';
import { Game } from '@shared/interfaces/games.interfaces';
import { GamesListPayload } from '@shared/interfaces/requests.interfaces';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(
    private readonly http: HttpClient,
    private readonly httpService: HttpService,
  ) { }

  public getGamesList(): Observable<GamesListPayload> {
    return this.http.get<GamesListPayload>(this.httpService.createApiUrl('games'), { params: defaultRequestConfig });
  }

  public getSingleGame(gameId: string): Observable<Game> {
    return this.http.get<Game>(this.httpService.createApiUrl(`games/${gameId}`), { params: defaultRequestConfig });
  }
}
