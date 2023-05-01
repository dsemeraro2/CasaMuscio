import { Component, OnInit } from '@angular/core';

interface ICheckStatus{
  id: string;
  value: string;
}
@Component({
  selector: 'app-check-people',
  templateUrl: './check-people.component.html',
  styleUrls: ['./check-people.component.css'],
})
export class CheckPeopleComponent implements OnInit {
  
  ngOnInit() {
    this.reload();    
  }
  
  //Contatori
  checkStatus: ICheckStatus[] = [
    {
      id: 'Alessandro',
      value: 'Online',
    },
    {
      id: 'Carmine',
      value: 'Offline',
    },
    {
      id: 'Daniele',
      value: 'Loading',
    },
    { id: 'Nicolas', value: 'Loading' },
  ];

  reload() {
    console.log('Ricaricato!');
  }

}
