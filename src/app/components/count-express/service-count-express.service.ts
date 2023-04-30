import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpsCountExpressService, ICountExpressHttps } from 'src/app/services/https-count-express.service';

@Injectable({ providedIn: 'root' })
export class ServiceCountExpressService {
  constructor(private countExpressService: HttpsCountExpressService) {}

  responseCountExpressAlessandro: ICountExpressHttps | undefined;
  responseCountExpressCarmine: ICountExpressHttps | undefined;
  responseCountExpressDaniele: ICountExpressHttps | undefined;
  responseCountExpressNicolas: ICountExpressHttps | undefined;

  getCountExpress(person: string) {
    return this.countExpressService.getCountExpress(person).pipe(
        map((data: ICountExpressHttps) => {
          return {
            express: data.express
          };
        })
      );
  }

  postCountExpress(person: string, value: number) {
    return this.countExpressService.postCountExpress(person, value);
  }

}
