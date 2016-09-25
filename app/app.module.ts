import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TitleComponent }   from './title/title.component';
import { FormComponent }   from './form/form.component';
import { MakerComponent }   from './form/maker.component';
import { ProgressComponent }   from './progress/progress.component';
import { ResultComponent }   from './result/result.component';
import { SimularCarsComponent }   from './siumlar/siumlar.cars.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TitleComponent, FormComponent, 
                 MakerComponent, ProgressComponent, ResultComponent, SimularCarsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

