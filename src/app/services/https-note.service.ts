import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class HttpsNotesService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getNotes() {
    return this.httpClient.get(this.path + 'notes', { responseType: 'text' });
  }

  postNotes(item: string) {
    return this.httpClient.post(this.path + 'notes', item);
  }

}
