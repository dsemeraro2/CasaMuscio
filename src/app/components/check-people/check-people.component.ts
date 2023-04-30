import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-people',
  templateUrl: './check-people.component.html',
  styleUrls: ['./check-people.component.css'],
})
export class CheckPeopleComponent implements OnInit {
  ngOnInit() {
    this.reload();

    this.http.get('http://192.168.1.15:3000/checkStatusNicolas').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  statusAlessandro = 'Loading';
  statusCarmine = 'Loading';
  statusDaniele = 'Loading';
  statusNicolas = 'Loading';

  constructor(private http: HttpClient) {}

  reload() {
    console.log('Ricaricato!');
    this.statusAlessandro = 'Offline';
    this.statusCarmine = 'Offline';
    this.statusDaniele = 'Online';
    this.statusNicolas = 'Online';
  }
}
