import { Component, OnInit } from '@angular/core';
import '../rxjs-operators';
import { Maker } from '../maker';
import { Model } from '../model';
import { Year } from '../year';
import { TrademeApiService }        from '../trademe.api.service';
import { YEARS } from '../test/mock.years';
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
       if (!newMakerNumber) { return; }
        this.trademeService.searchModels(newMakerNumber)
                     .then(
                       models => this.models = models,
                       error =>  this.errorMessage = <any>error); 
      
  }
  clickStart(){
      this.isAssessing = true;
  }
}