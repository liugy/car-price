import { Injectable }     from '@angular/core';
import { CarInfo } from './carinfo';
import { FormInfo } from './forminfo';
import {PriceIndexPair} from './price.index.pair';
@Injectable()
export class AssessService {
    private myPriceIndex:number;
//    private otherCarsPriceIndex: PriceIndexPair[];
    private big5pair:PriceIndexPair[];
    private small5pair:PriceIndexPair[];
    assess(cars:CarInfo[], formInfo:FormInfo):number{
        this.myPriceIndex = this.calcIndex(formInfo.Year, formInfo.Odometer);
        this.convertToPriceIndexPair(cars);
        return this.averagePrice();
    }
    private convertToPriceIndexPair(cars:CarInfo[]){
        this.big5pair = new Array<PriceIndexPair>();
        this.small5pair = new Array<PriceIndexPair>();
        let priceIndex = 0;
        for(let car of cars){
            if(car.Price > 0){
                priceIndex = this.calcIndex(car.Year, car.Odometer);
                if(priceIndex > 0){
                    if(priceIndex > this.myPriceIndex){
                        this.big5pair.push(new PriceIndexPair(priceIndex, car.Price));
                        if(this.big5pair.length > 5){
                            this.deleteMaxIndex();
                        }
                    }else{
                        this.small5pair.push(new PriceIndexPair(priceIndex, car.Price));
                        if(this.small5pair.length < 5){
                            this.deleteMinIndex();
                        }
                    }
                }         
            }
        }
    }
    private deleteMaxIndex(){
        let pointer = 0;
        for(let i=1; i<this.big5pair.length; i++){
            if(this.big5pair[i].index > this.big5pair[pointer].index){
                pointer = i;
            }
        }
        this.big5pair.splice(pointer, 1);
    }
    private deleteMinIndex(){
        let pointer = 0;
        for(let i=1; i<this.small5pair.length; i++){
            if(this.small5pair[i].index < this.small5pair[pointer].index){
                pointer = i;
            }
        }
        this.big5pair.splice(pointer, 1);
    }
    private averagePrice (): number{
        let total = 0;
        let count =0;
        for(let pair of this.big5pair){
            console.log(pair);
            total += pair.price;
            count ++;
        }
        for (let pair of this.small5pair){
            console.log(pair);

            total += pair.price;
            count ++;
        }
        if (count ==0) return 0;
        return total/count;
    }
    private calcIndex(year:number, odometer:number):number{
        let yearIndex = (20 - (new Date().getFullYear() - year))*5;
        let odoIndex = (300000 - odometer) /3000;
        if (odoIndex<=0) return 0;
        if (yearIndex <= 0) return 0;
        if (year <=0) return 0;
        if (odoIndex <=0) return 0;
        return (yearIndex * odoIndex * 100);
    }
}