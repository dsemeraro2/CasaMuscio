import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountExpress } from 'src/app/models/count-express';
import { HttpsCountExpressService} from 'src/app/services/https-services/https-count-express.service';

@Injectable({ providedIn: 'root' })
export class ServiceCountExpressService {
  constructor(private countExpressService: HttpsCountExpressService) {}

  getCountExpress(): Observable<ICountExpress[]> {
    return this.countExpressService.getCountExpress();
  }

  postCountExpress(item: ICountExpress) {
    return this.countExpressService.postCountExpress(item);
  }

}
