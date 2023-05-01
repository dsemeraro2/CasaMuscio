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
    this.loadCounterExpress();
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

  resetting: boolean = false;

  //Popolo i countExpress
  loadCounterExpress() {
    this.countExpressService
      .getCountExpress()
      .subscribe((response: ICountExpress[]) => {
        this.countExpress = response;
      });
  }

  //Incremento count
  counterExpressPlus(countExpress: ICountExpress) {
    countExpress.value++;
    this.countExpressService.postCountExpress(countExpress).subscribe();
  }

  //Decremento count
  counterExpressMinus(countExpress: ICountExpress) {
    if (countExpress.value > 0) {
      countExpress.value--;
      this.countExpressService.postCountExpress(countExpress).subscribe();
    }
  }

  //Resetto count
  resetCounterExpress() {
    console.log('Reset count!');
    for (const item of this.countExpress) {
      item.value = 0;
      this.countExpressService.postCountExpress(item).subscribe(() => {
        this.resetting = true;

        setTimeout(() => {
          this.resetting = false;
        }, 1000);
      });
    }
  }
}
