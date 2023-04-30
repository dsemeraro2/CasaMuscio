import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICountExpress {
  id: string;
  person: string;
  value: number;
}

@Injectable({ providedIn: 'root' })
export class HttpsCountExpressService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.15:3000/';

  getCountExpress() {
    return this.httpClient.get<ICountExpress[]>(this.path + 'countExpress');
  }

  postCountExpress(person: string, value: number) {
    return this.httpClient.post<ICountExpress>(this.path + person, value);
  }


}
