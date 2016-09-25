import { Component, Input } from '@angular/core';
import { CarInfo } from '../carinfo';
@Component({
  selector: 'assessor-simular-cars',
  templateUrl: 'assessor-simular-cars.html'
})
export class SimularCarsComponent {
  @Input() simularCars: CarInfo[];
}