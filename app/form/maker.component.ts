import { Component, OnInit } from '@angular/core';
import '../rxjs-operators';
import { Maker } from '../maker';
import { TrademeApiService }        from '../trademe.api.service';

@Component({
  selector: 'assessor-maker',
//  providers: [TrademeApiService],
  templateUrl: 'assessor-maker.html'
})
export class MakerComponent implements OnInit {
  errorMessage: string;
  mode = 'Promise';
  makers: Maker[];

  constructor(private trademeService: TrademeApiService) {}
  ngOnInit() { this.getMakers(); }
    
  getMakers() {
        this.trademeService.getMakers()
                     .then(
                       makers => this.makers = makers,
                       error =>  this.errorMessage = <any>error);
 
  }
}

