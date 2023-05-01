import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICountExpress {
  id: string;
  value: number;
}

@Injectable({ providedIn: 'root' })
export class HttpsCountExpressService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getCountExpress() {
    return this.httpClient.get<ICountExpress[]>(this.path + 'countExpress');
  }

  postCountExpress(item: ICountExpress) {
    return this.httpClient.post<ICountExpress>(this.path + 'countExpress', item);
  }

}
