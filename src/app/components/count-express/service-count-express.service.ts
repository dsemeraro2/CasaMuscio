import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpsCountExpressService, ICountExpress } from 'src/app/services/https-count-express.service';

@Injectable({ providedIn: 'root' })
export class ServiceCountExpressService {
  constructor(private countExpressService: HttpsCountExpressService) {}

  responseCountExpressAlessandro: ICountExpress | undefined;
  responseCountExpressCarmine: ICountExpress | undefined;
  responseCountExpressDaniele: ICountExpress | undefined;
  responseCountExpressNicolas: ICountExpress | undefined;

  getCountExpress(person: string) {
    return this.countExpressService.getCountExpress(person).pipe(
        map((data: ICountExpress) => {
          return {
            express: data.express
          };
        })
      );
  }

  postCountExpress(value: number, person: string) {
    return this.countExpressService.postCountExpress(value, person);
  }

}
