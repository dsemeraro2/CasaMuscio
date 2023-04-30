import { Component } from '@angular/core';
import { CountExpressService, ICountExpress } from 'src/app/services/count-express.service';

@Component({
  selector: 'app-count-express',
  templateUrl: './count-express.component.html',
  styleUrls: ['./count-express.component.css']
})
export class CountExpressComponent {

  constructor(private countExpressService: CountExpressService){}
  
  responseStatusAlessandro: ICountExpress | undefined;

  expressAlessandro = 0;
  expressCarmine = 0;
  expressDaniele = 0;
  expressNicolas = 0;

  counterExpressPlus(value: string) {
    if(value == "expressAlessandro"){
      this.expressAlessandro++;
    }
    if(value == "expressCarmine"){
      this.expressCarmine++;
    }
    if(value == "expressDaniele"){
      this.expressDaniele++;
    }
    if(value == "expressNicolas"){
      this.expressNicolas++;
    }
  }

  counterExpressMinus(value: string) {
    if(value == "expressAlessandro" && this.expressAlessandro>0){
      this.expressAlessandro--;
    }
    if(value == "expressCarmine" && this.expressCarmine>0){
      this.expressCarmine--;
    }
    if(value == "expressDaniele" && this.expressDaniele>0){
      this.expressDaniele--;
    }
    if(value == "expressNicolas" && this.expressNicolas>0){
      this.expressNicolas--;
    }
  }

  resetCounter(){
    this.expressAlessandro=0;
    this.expressCarmine=0;
    this.expressDaniele=0;
    this.expressNicolas=0;
  }

  showCountExpressAlessandro() {
    this.countExpressService.getCountExpressAlessandro()
      .subscribe((data: ICountExpress) => this.responseStatusAlessandro = {
          express: data.express,
      });
  }

}
