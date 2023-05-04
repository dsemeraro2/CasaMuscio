import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { INotes } from 'src/app/models/notes';

@Injectable({ providedIn: 'root' })
export class HttpsNotesService {
  constructor(private httpClient: HttpClient) {}

  path = 'http://192.168.1.3:3000/';

  getNotes(): Observable<INotes> {
    return this.httpClient.get<INotes>(this.path + 'notes');
  }

  postNotes(item: INotes) {
    return this.httpClient.post(this.path + 'notes', item);
  }

}
