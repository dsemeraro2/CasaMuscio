import { Injectable } from '@angular/core';
import { HttpsCheckStatusService } from 'src/app/services/https-services/https-check-status.service';

@Injectable({ providedIn: 'root' })
export class CheckStatusService {
  constructor(private checkStatusService: HttpsCheckStatusService) {}

  getCheckStatus() {
    return this.checkStatusService.getCheckStatus();
  }

}
