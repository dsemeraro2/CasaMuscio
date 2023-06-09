import { Component } from '@angular/core';
import { IHomeworks } from 'src/app/models/homerworks';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent {

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

}
