import { Injectable } from '@angular/core';
import { HttpsHomeworksService } from 'src/app/services/https-services/https-homeworks.service';

@Injectable({
  providedIn: 'root'
})
export class HomeworksService {

  constructor(private homeworksService: HttpsHomeworksService) {}

  getHomeworks() {
    return this.homeworksService.getHomeworks();
  }
}
