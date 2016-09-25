import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import '../rxjs-operators';
import { Maker } from '../maker';
import { Model } from '../model';
import { Year } from '../year';
import { TrademeApiService }        from '../trademe.api.service';
import { YEARS } from '../test/mock.years';
import { CarInfo} from '../carinfo'
@Component({
  selector: 'assessor-form',
  templateUrl: 'assessor-form.html'
})
export class FormComponent {
 
  isAssessing = false;
  errorMessage: string;
  mode = 'Promise';
  makers: Maker[];
  models: Model[];
  years: Year[];
  selectedMakeName:string;
  selectedModel:string;
  selectedYear:number;
  selectedKilometers:number;
  @Output() 
  onStart = new EventEmitter<CarInfo>();

  constructor(private trademeService: TrademeApiService) {}
  ngOnInit() {
      this.years = YEARS;
      this.getMakers(); 
  }
    
  getMakers() {
        this.trademeService.getMakers()
                     .then(
                       makers => this.makers = makers,
                       error =>  this.errorMessage = <any>error);
 
  }
  changeMaker(newMakerNumber:string){
      this.selectedModel = null;
      for(let entry of this.makers){
          if( entry.Number == newMakerNumber){
              this.selectedMakeName = entry.Name;
              break;
          }
      }      
       if (!newMakerNumber) { return; }
        this.trademeService.searchModels(newMakerNumber)
                     .then(
                       models => this.models = models,
                       error =>  this.errorMessage = <any>error); 
      
  }
  changeModel(newModel:string){
      this.selectedModel = newModel;
      console.log(this.selectedModel);
  }
  changeYear(newYear: string){
      this.selectedYear = Number(newYear);
      console.log(this.selectedYear);
  }
  changeKilometers(newKilo: string){
      try{
          this.selectedKilometers = Number(newKilo);
          
      }catch(ex){
          //todo: handle error here.    
      }
  }
  clickStart(){
      
      this.onStart.emit(new CarInfo(this.selectedMakeName || this.makers[0].Name, 
                                    this.selectedModel || this.models[0].Value,
                                    this.selectedYear || Number(this.years[0].Value),
                                    this.selectedKilometers || 50000));

//      this.isAssessing = true;
      
  }
}