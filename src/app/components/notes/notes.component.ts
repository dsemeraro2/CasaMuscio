import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { INotes } from 'src/app/services/https-note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  textareaContent: INotes = {
    text: '',
  };
  saving: boolean = false;
  loading: boolean = false;

  loadNotes() {
    this.notesService.getNotes().subscribe((response) => {
      this.textareaContent = response;
    });
  }

  saveNotes() {
    this.saving = true;
    this.notesService.postNotes(this.textareaContent).subscribe();
    setTimeout(() => {
      this.saving = false;
    }, 1000);
  }

  reloadNotes() {
    this.loading = true;

    setTimeout(() => {
      this.loadNotes();
      this.loading = false;
    }, 1500);
  }

}
