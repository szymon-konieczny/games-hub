import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { AppConfig } from '@env/environment';
import { RequestConfig } from '@shared/interfaces/requests.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  public createApiUrl(path: string, requestConfig?: Partial<RequestConfig>): string {
    const queryParamsString = requestConfig ? this.getQueryParams(requestConfig) : '';
    return `${AppConfig.apiUrl}/${path}${queryParamsString}`;
  }

  private parseQueryParams(requestConfig: Partial<RequestConfig>): string {
    return Object.entries(requestConfig)
      .map(([key, value]) => `${key}=${typeof value === 'string' ? value.replace(/\s/, '+') : value}`)
      .join('&');
  }

  private getQueryParams(requestConfig: Partial<RequestConfig>): string {
    const queryParams = this.parseQueryParams(requestConfig);
    return `?${queryParams}`;
  }
}
