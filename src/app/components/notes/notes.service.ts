import { Injectable } from '@angular/core';
import { HttpsNotesService } from 'src/app/services/https-note.service';

@Injectable({providedIn: 'root'})
export class NotesService {
  constructor(private notesService: HttpsNotesService) {}
  
  getNotes() {
    return this.notesService.getNotes();
  }

  postNotes(item: string) {
    return this.notesService.postNotes(item);
  }

}