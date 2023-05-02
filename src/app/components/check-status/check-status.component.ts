import { Component, OnInit } from '@angular/core';
import { ServiceCheckStatusService } from './service-check-status.service';
import { ICheckStatus } from 'src/app/services/https-check-status.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css'],
})
export class CheckStatusComponent implements OnInit {
  ngOnInit() {
    this.loadStatus();
  }

  constructor(private checkStatusService: ServiceCheckStatusService) {}

  //Contatori
  checkStatus: ICheckStatus[] = [
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

  loading: boolean = false;

  loadStatus() {
    setTimeout(() => {
      this.checkStatusService
        .getCheckStatus()
        .subscribe((response: ICheckStatus[]) => {
          this.checkStatus = response;
        });
    }, 2000);
  }

  reloadStatus() {
    this.loading = true;
    for (let i = 0; i < this.checkStatus.length; i++) {
      this.checkStatus[i].value = 'Loading';
    }

    setTimeout(() => {
      this.loadStatus();
      this.loading = false;
    }, 2000);
  }
}
