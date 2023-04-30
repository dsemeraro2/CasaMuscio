import { Component, OnInit } from '@angular/core';
import { ServiceCountExpressService } from './service-count-express.service';
import { ICountExpress } from 'src/app/services/https-count-express.service';

@Component({
  selector: 'app-count-express',
  templateUrl: './count-express.component.html',
  styleUrls: ['./count-express.component.css'],
})
export class CountExpressComponent implements OnInit {
  ngOnInit() {
    this.counterExpressInitialize();
  }

  constructor(private countExpressService: ServiceCountExpressService) {}

  //Contatori
  countExpress: ICountExpress[] = [
    {
      id: 'Alessandro',
      value: 0,
    },
    {
      id: 'Carmine',
      value: 0,
    },
    {
      id: 'Daniele',
      value: 0,
    },
    { id: 'Nicolas', value: 0 },
  ];

  //Popolo i countExpress
  counterExpressInitialize() {
    this.countExpressService
      .getCountExpress()
      .subscribe((response: ICountExpress[]) => {
        console.log("Repsonse", response);
        this.countExpress = response;
      });
  }

  //Incremento count
  counterExpressPlus(countExpress: ICountExpress) {
    countExpress.value++;
    this.countExpressService
      .postCountExpress(countExpress)
      .subscribe();
  }

  //Decremento count
  counterExpressMinus(countExpress: ICountExpress) {
    countExpress.value--;
    if (countExpress.value > 0) {
      this.countExpressService
        .postCountExpress(countExpress)
        .subscribe();
    }
  }

  //Resetto count
  resetCounter() {
    console.log('Reset count!');
    for (const item of this.countExpress) {
      item.value=0;
      this.countExpressService
        .postCountExpress(item)
        .subscribe();
    }
  }
}
