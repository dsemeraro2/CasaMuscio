import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpsCountExpressService, ICountExpress } from 'src/app/services/https-count-express.service';
import { ServiceCountExpressService } from './service-count-express.service';

@Component({
  selector: 'app-count-express',
  templateUrl: './count-express.component.html',
  styleUrls: ['./count-express.component.css']
})
export class CountExpressComponent implements OnInit {
  
  ngOnInit() {
    this.counterExpressInitialize();
  }
  
  constructor(private countExpressService: ServiceCountExpressService) {}
  
  countExpressAlessandro = 0;
  countExpressCarmine = 0;
  countExpressDaniele = 0;
  countExpressNicolas = 0;

  //Popolo i countExpress
  counterExpressInitialize(){
    this.countExpressService.getCountExpress('countExpressAlessandro').subscribe((response: ICountExpress) => {
      this.countExpressAlessandro = response.express;
    });
    this.countExpressService.getCountExpress('countExpressCarmine').subscribe((response: ICountExpress) => {
      this.countExpressCarmine = response.express;
    });
    this.countExpressService.getCountExpress('countExpressDaniele').subscribe((response: ICountExpress) => {
      this.countExpressDaniele = response.express;
    });
    this.countExpressService.getCountExpress('countExpressNicolas').subscribe((response: ICountExpress) => {
      this.countExpressNicolas = response.express;
    });
  }

  counterExpressPlus(value: string) {
    if(value === 'countExpressAlessandro'){
      this.countExpressAlessandro++;
    }
    if(value === 'countExpressCarmine'){
      this.countExpressCarmine++;
    }
    if(value === 'countExpressDaniele'){
      this.countExpressDaniele++;
    }
    if(value === 'countExpressNicolas'){
      this.countExpressNicolas++;
    }
  }

  counterExpressMinus(value: string) {
    if(value === 'countExpressAlessandro' && this.countExpressAlessandro>0){
      this.countExpressAlessandro--;
    }
    if(value === 'countExpressCarmine' && this.countExpressCarmine>0){
      this.countExpressCarmine--;
    }
    if(value === 'countExpressDaniele' && this.countExpressDaniele>0){
      this.countExpressDaniele--;
    }
    if(value === 'countExpressNicolas' && this.countExpressNicolas>0){
      this.countExpressNicolas--;
    }
  }

  resetCounter(){
    console.log("Reset count!");
    this.countExpressAlessandro = 0;
    this.countExpressCarmine = 0;
    this.countExpressDaniele = 0;
    this.countExpressNicolas = 0;
  }

}
