import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-people',
  templateUrl: './check-people.component.html',
  styleUrls: ['./check-people.component.css'],
})
export class CheckPeopleComponent implements OnInit {
  
  ngOnInit() {
    this.reload();    
  }
  
  statusAlessandro = 'Loading';
  statusCarmine = 'Loading';
  statusDaniele = 'Loading';
  statusNicolas = 'Loading';

  reload() {
    console.log('Ricaricato!');
    this.statusAlessandro = 'Offline';
    this.statusCarmine = 'Offline';
    this.statusDaniele = 'Online';
    this.statusNicolas = 'Online';
  }

}
