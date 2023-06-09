import { Component, OnInit } from '@angular/core';
import { IHomeworks } from 'src/app/models/homerworks';
import { HomeworksService } from './homeworks.service';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent implements OnInit {
  ngOnInit(): void {
    this.loadHomeworks();
  }

  constructor(private homeworksService: HomeworksService) {}

  homeworks: IHomeworks[] = [
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

  loadHomeworks() {
    setTimeout(() => {
      this.homeworksService
        .getHomeworks()
        .subscribe((response: IHomeworks[]) => {
          this.homeworks = response;
        });
    }, 1000);
  }

}
