import { Component, OnInit } from '@angular/core';
import { IHomeworks } from 'src/app/models/homerworks';
import { HomeworksService } from './homeworks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html'
})
export class HomeworksComponent implements OnInit {
  ngOnInit(): void {
    this.loadHomeworks();
    this.month = this.getMonth();
  }

  constructor(
    private homeworksService: HomeworksService,
    private datePipe: DatePipe
  ) {}

  homeworks: string[] = ['Bagno', 'Cucina', 'Scopare', 'Pavimento'];

  assignedHomeworks: IHomeworks[] = [
    {
      id: 'Alessandro',
      value: 'Loading',
    },
    {
      id: 'Carmine',
      value: 'Loading',
    },
    {
      id: 'Daniele',
      value: 'Loading',
    },
    { id: 'Nicolas', value: 'Loading' },
  ];

  month: string = '';

  loadHomeworks() {
    setTimeout(() => {
      this.homeworksService
        .getHomeworks()
        .subscribe((response: IHomeworks[]) => {
          this.assignedHomeworks = response;
        });
    }, 1000);
  }

  getMonth(): string {
    const currentDate = new Date(); // Ottieni la data corrente
    return this.datePipe.transform(currentDate, 'MMMM') ?? 'N/A'; // Ottieni il nome completo del mese
  }

}
