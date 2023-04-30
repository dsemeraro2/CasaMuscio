import { Injectable } from '@angular/core';
import { HttpsCountExpressService, ICountExpress} from 'src/app/services/https-count-express.service';

@Injectable({ providedIn: 'root' })
export class ServiceCountExpressService {
  constructor(private countExpressService: HttpsCountExpressService) {}

  responseCountExpressAlessandro: ICountExpress | undefined;
  responseCountExpressCarmine: ICountExpress | undefined;
  responseCountExpressDaniele: ICountExpress | undefined;
  responseCountExpressNicolas: ICountExpress | undefined;

  getCountExpress() {
    return this.countExpressService.getCountExpress();
  }

  postCountExpress(item: ICountExpress) {
    return this.countExpressService.postCountExpress(item);
  }

}
