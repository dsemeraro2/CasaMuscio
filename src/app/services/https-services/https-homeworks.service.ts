import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHomeworks } from 'src/app/models/homerworks';

@Injectable({ providedIn: 'root' })
export class HttpsHomeworksService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getHomeworks(): Observable<IHomeworks[]> {
    return this.httpClient.get<IHomeworks[]>(this.path + 'homeworks');
  }

  postHomeworks(item: IHomeworks[]) {
    return this.httpClient.post<IHomeworks[]>(this.path + 'homeworks', item);
  }

}
