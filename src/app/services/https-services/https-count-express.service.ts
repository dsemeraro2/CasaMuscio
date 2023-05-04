import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICountExpress } from 'src/app/models/count-express';

@Injectable({ providedIn: 'root' })
export class HttpsCountExpressService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getCountExpress(): Observable<ICountExpress[]> {
    return this.httpClient.get<ICountExpress[]>(this.path + 'countExpress');
  }

  postCountExpress(item: ICountExpress) {
    return this.httpClient.post<ICountExpress>(this.path + 'countExpress', item);
  }

}
