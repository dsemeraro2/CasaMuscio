import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICountExpress {
  express: number;
}

@Injectable({ providedIn: 'root' })
export class HttpsCountExpressService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.15:3000/';

  getCountExpress(value: string) {
    return this.httpClient.get<ICountExpress>(this.path + value);
  }

}
