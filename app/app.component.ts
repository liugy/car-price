import { Component } from '@angular/core';
import './rxjs-operators';
import { FormInfo } from './forminfo';
import { TrademeApiService }        from './trademe.api.service';
import { CarInfo } from './carinfo';
import { AssessService} from './assess.service';

@Component({
  selector: 'car-assessor-app',
  templateUrl: 'car-assessor.html'
})
export class AppComponent {
  errorMessage: string;
  assessment = 0;
  title = "Alan's car assessment tool";
  simularCars: CarInfo[];
  checkCars(cars:CarInfo[], formInfo:FormInfo){
      if(cars.length < 10){
          this.trademeService.queryMoreCars(formInfo)
                 .then(
                   simularCars => this.processCars( simularCars, formInfo ),
                   error =>  this.errorMessage = <any>error);          
      }else{
          this.processCars(cars, formInfo);
      }
  }
  private processCars(cars:CarInfo[], formInfo:FormInfo){
      if(cars && cars.length >0){
        this.simularCars = cars;
        this.assess(formInfo);
      }else{
          this.errorMessage = "Can not assess, since no relative data found. Please choose Toyota RAV4 with the trademe sandbox";
      }
  }
  private assess(formInfo:FormInfo){
      this.assessment = this.assessService.assess(this.simularCars, formInfo);
  }
  constructor(private trademeService: TrademeApiService,
              private assessService: AssessService) {}

  onStart(formInfo:FormInfo){
              this.trademeService.querySimularCars(formInfo)
                     .then(
                       simularCars => this.checkCars( simularCars ,formInfo),
                       error =>  this.errorMessage = <any>error);

  }
  onError(message:string){
      this.errorMessage = message;
  }
}

