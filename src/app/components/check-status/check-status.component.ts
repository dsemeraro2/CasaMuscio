import { Component, OnInit } from '@angular/core';

interface ICheckStatus {
  id: string;
  value: string; //Loading, Online, Offline
}
@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css'],
})
export class CheckStatusComponent implements OnInit {
  ngOnInit() {
    this.loadStatus();
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

  loading: boolean = false;
  loadStatus() {
    console.log('Caricato!');
  }

  reloadStatus() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
