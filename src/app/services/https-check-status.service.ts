import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ICheckStatus{
  id: string;
  value: string; //Loading, Online, Offline
}

@Injectable({ providedIn: 'root' })
export class HttpsCheckStatusService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getCheckStatus() {
    return this.httpClient.get<ICheckStatus[]>(this.path + 'checkStatus');
  }

}
