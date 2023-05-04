import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INotes } from 'src/app/models/notes';
import { HttpsNotesService } from 'src/app/services/https-services/https-note.service';

@Injectable({providedIn: 'root'})
export class NotesService {
  constructor(private notesService: HttpsNotesService) {}
  
  getNotes(): Observable<INotes> {
    return this.notesService.getNotes();
  }

  postNotes(item: INotes) {
    return this.notesService.postNotes(item);
  }

}