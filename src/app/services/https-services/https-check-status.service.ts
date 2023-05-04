import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICheckStatus } from 'src/app/models/check-status';

@Injectable({ providedIn: 'root' })
export class HttpsCheckStatusService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getCheckStatus() {
    return this.httpClient.get<ICheckStatus[]>(this.path + 'checkStatus');
  }

}
