import { Component } from '@angular/core';
import './rxjs-operators';
import {CarInfo} from './carinfo';

@Component({
  selector: 'car-assessor-app',
  templateUrl: 'car-assessor.html'
})
export class AppComponent {
  title = "Alan's car assessment tool";
  onStart(carinfo:CarInfo){
      console.log(carinfo);
  }
}

