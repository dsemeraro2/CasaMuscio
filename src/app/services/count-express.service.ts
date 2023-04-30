import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICountExpress {
    express: number;
  }

@Injectable({providedIn: 'root'})
export class CountExpressService {
    constructor(private httpClient: HttpClient) { }

    configUrl = 'countExpressAlessandro';

    getCountExpressAlessandro() {
        return this.httpClient.get<ICountExpress>(this.configUrl);
      }
    
}