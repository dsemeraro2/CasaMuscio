import { Component, OnInit } from '@angular/core';
import { CheckStatusService } from './check-status.service';
import { ICheckStatus } from 'src/app/models/check-status';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {
  ngOnInit(): void {
    this.loadStatus();
  }

  constructor(private checkStatusService: CheckStatusService) {}

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
    }, 1000);
  }

  reloadStatus() {
    this.loading = true;
    for (let i = 0; i < this.checkStatus.length; i++) {
      this.checkStatus[i].value = 'Loading';
    }

    setTimeout(() => {
      this.loadStatus();
      this.loading = false;
    }, 1500);
  }
}
