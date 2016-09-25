import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TitleComponent }   from './title/title.component';
import { FormComponent }   from './form/form.component';
import { MakerComponent }   from './form/maker.component';
import { ProgressComponent }   from './progress/progress.component';
import { ResultComponent }   from './result/result.component';
import { SimularCarsComponent }   from './siumlar/siumlar.cars.component';
import { TrademeApiService } from './trademe.api.service'

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule],
    declarations: [
        AppComponent, 
        TitleComponent, 
        FormComponent, 
        MakerComponent, 
        ProgressComponent, 
        ResultComponent, 
        SimularCarsComponent ],
    providers: [TrademeApiService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

