import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import '../rxjs-operators';
import { Maker } from '../maker';
import { Model } from '../model';
import { Year } from '../year';
import { TrademeApiService }        from '../trademe.api.service';
import { YEARS } from '../test/mock.years';
import { FormInfo} from '../forminfo'
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
  onStart = new EventEmitter<FormInfo>();
  @Output()
  onError = new EventEmitter<string>();

  constructor(private trademeService: TrademeApiService) {}
  ngOnInit() {
      this.years = YEARS;
      this.getMakers(); 
  }
    
  getMakers() {
        this.trademeService.getMakers()
                     .then(
                       makers => this.initMakers(makers),
                       error =>  this.handleError(<any>error));
 
  }
  private initMakers(newMakers:Maker[]){
      this.makers = newMakers;
      if(this.makers && this.makers.length >0)
        this.changeMaker(this.makers[0].Number);
  }
  private handleError(message:string){
      this.onError.emit(message);
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
                       error =>  this.handleError(<any>error)); 
      
  }
  changeModel(newModel:string){
      this.selectedModel = newModel;
  }
  changeYear(newYear: string){
      this.selectedYear = Number(newYear);
  }
  changeKilometers(newKilo: string){
      console.log(newKilo);
          this.selectedKilometers = Number(newKilo);
          if (isNaN(this.selectedKilometers)){
             this.handleError("Please input number in Kilometres field");    

          }
          console.log(this.selectedKilometers);
  }
  clickStart(){
      if (isNaN(this.selectedKilometers)){
        this.handleError("Please input number in Kilometres field");    
        return ;
      }
      if (!this.models || this.models.length == 0) return ;
      this.handleError(null);
      this.onStart.emit(new FormInfo(this.selectedMakeName || this.makers[0].Name, 
                                    this.selectedModel || this.models[0].Value,
                                    this.selectedYear || Number(this.years[0].Value),
                                    this.selectedKilometers || 50000));

//      this.isAssessing = true;
      
  }
}