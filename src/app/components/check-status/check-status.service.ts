import { Injectable } from '@angular/core';
import { HttpsCheckStatusService } from 'src/app/services/https-check-status.service';

@Injectable({ providedIn: 'root' })
export class ServiceCheckStatusService {
  constructor(private checkStatusService: HttpsCheckStatusService) {}

  getCheckStatus() {
    return this.checkStatusService.getCheckStatus();
  }

}
