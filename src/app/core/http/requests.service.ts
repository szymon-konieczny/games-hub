import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { defaultRequestConfig } from '@shared/constants/defaults';
import { Game } from '@shared/interfaces/games.interface';
import { ListPayload } from '@shared/interfaces/requests.interfaces';
import { HttpService } from './http.service';
import { Category } from '@shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(
    private readonly http: HttpClient,
    private readonly httpService: HttpService,
  ) { }

  public getGamesList(): Observable<ListPayload> {
    return this.http.get<ListPayload>(this.httpService.createApiUrl('games'), { params: defaultRequestConfig });
  }

  public getSingleGame(gameId: string): Observable<Game> {
    return this.http.get<Game>(this.httpService.createApiUrl(`games/${gameId}`), { params: defaultRequestConfig });
  }

  public getCategoriesList(): Observable<ListPayload> {
    return this.http.get<ListPayload>(this.httpService.createApiUrl('game-categories'), { params: defaultRequestConfig });
  }

  public getSingleCategory(slug: string): Observable<Category> {
    return this.http.get<Category>(this.httpService.createApiUrl(`game-categories/${slug}`), { params: defaultRequestConfig });
  }
}
