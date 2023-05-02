import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

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

  textareaContent: string = '';

  loadNotes() {
    this.notesService.getNotes().subscribe((response) => {
      this.textareaContent = response;
    });
  }
}
