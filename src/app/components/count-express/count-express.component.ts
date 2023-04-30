import { Component, OnInit } from '@angular/core';
import { ServiceCountExpressService } from './service-count-express.service';
import { ICountExpressHttps } from 'src/app/services/https-count-express.service';

interface ICountExpress {
  id: string;
  person: string;
  value: number;
}

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
      id: 'countExpressAlessandro',
      person: 'Alessandro',
      value: 0,
    },
    {
      id: 'countExpressCarmine',
      person: 'Carmine',
      value: 0,
    },
    {
      id: 'countExpressDaniele',
      person: 'Daniele',
      value: 0,
    },
    { id: 'countExpressNicolas', person: 'Nicolas', value: 0 },
  ];

  //Popolo i countExpress
  counterExpressInitialize() {
    for (const item of this.countExpress) {
      this.countExpressService
        .getCountExpress(item.id)
        .subscribe((response: ICountExpressHttps) => {
          item.value = response.express;
        });
    }
  }

  //Incremento count
  counterExpressPlus(countExpress: ICountExpress) {
    this.countExpressService
      .postCountExpress(countExpress.id, countExpress.value++)
      .subscribe();
  }

  //Decremento count
  counterExpressMinus(countExpress: ICountExpress) {
    if (countExpress.value > 0) {
      this.countExpressService
        .postCountExpress(countExpress.id, countExpress.value--)
        .subscribe();
    }
  }

  //Resetto count
  resetCounter() {
    console.log('Reset count!');
    for (const item of this.countExpress) {
      this.countExpressService
      .postCountExpress(item.id, item.value=0)
      .subscribe();
    }
  }
}
