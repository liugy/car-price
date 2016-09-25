
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Maker } from './maker';
import { Model } from './model';
import { FormInfo } from './forminfo';
import { CarInfo } from './carinfo';
declare var OAuth:any;
declare var CryptoJS:any;
@Injectable()
export class TrademeApiService {
  constructor (private http: Http) {}
    private testing = true;  // using sandbox now, since production key is not approved by trademe.co.nz.
    private oauth = OAuth({
        consumer: {
            key: this.testing? 'D523BBD5542EA96BCD08440B752CD81C' : 'C49656ECD94211DE6F1AAA5CC95BDD4B', // sandbox/production
            secret: this.testing? 'E8C34B9DCEC7711E0FE3A13A840AF8E4' : '7E2BE6F6C74C58E2FD05D0734588799B' //sandbox/production
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string:string, key:string) {
            return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
        }
    });

    private token = {
        key: this.testing? '3294B1837135195D5F4B819AAC950FF7' : 'BCE4AC1A54060EC75BED28BA3C11ECB2',  //sandbox/production
        secret: this.testing? 'B65D2A91DC59A1E1B4CB6FA18FF42F99' : '86DFC02B93D55568E6D2344C9BCC667A'  //sandbox/production
    };

  private makersUrl = 'http://api.trademe.co.nz/v1/Categories/UsedCars.json';
  private searchModelUrl(catagoryNumber:string){
      return `https://api.trademe.co.nz/v1/Categories/${catagoryNumber}/Details.json`;
  }
  
  getMakers (): Promise<Maker[]> {
    return this.http.get(this.makersUrl)
                    .toPromise()
                    .then(this.extractMakers)
                    .catch(this.handleError);
  }
  
  searchModels (catagoryNumber:string): Promise<Model[]> {
    return this.http.get(this.searchModelUrl(catagoryNumber))
                    .toPromise()
                    .then(this.extractModels)
                    .catch(this.handleError);
  }

  querySimularCars (formInfo:FormInfo): Promise<CarInfo[]> {
    let request_data = {
        url: this.testing?`https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json?Make=${formInfo.Make}&Model=${formInfo.Model}&year_max=${formInfo.Year + 1}&year_min=${formInfo.Year -1}` : `https://api.trademe.co.nz/v1/Search/Motors/Used.json?Make=${formInfo.Make}&Model=${formInfo.Model}&year_max=${formInfo.Year + 1}&year_min=${formInfo.Year -1}`,
        method: 'GET',
        data: {
        }
    };

    let headers = this.oauth.toHeader(this.oauth.authorize(request_data, this.token));
    let options = new RequestOptions({
        headers:headers
    });
    return this.http.get(request_data.url, options)
                    .toPromise()
                    .then(this.extractCars.bind(this))
                    .catch(this.handleError);
  }
  

  private extractMakers (res: Response) {
    let body = res.json();
    return body.Subcategories || [];
  }

  private extractCars (res: Response) :CarInfo[]{
    let result = new Array<CarInfo>();
    let body = res.json();
    let price: number;
    
    for(let entry of body.List){
        try{
            price = Number(entry.PriceDisplay.substring(entry.PriceDisplay.indexOf("$") + 1,entry.PriceDisplay.length).replace(',',''));
        }catch(ex){
            price = 0;
        }
        if(price !=0){
            result.push(new CarInfo(entry.ListingId,
                                entry.Title,
                               price,
                               entry.Year,
                               entry.Odometer,
                               entry.EngineSize,
                               entry.Transmission));            
        }
    }  
    return result || [];
  }


 queryMoreCars (formInfo:FormInfo): Promise<CarInfo[]> {
    let request_data = {
        url: this.testing?`https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json?Make=${formInfo.Make}&Model=${formInfo.Model}` : `https://api.trademe.co.nz/v1/Search/Motors/Used.json?Make=${formInfo.Make}&Model=${formInfo.Model}`,
        method: 'GET',
        data: {
        }
    };

    let headers = this.oauth.toHeader(this.oauth.authorize(request_data, this.token));
    let options = new RequestOptions({
        headers:headers
    });
    return this.http.get(request_data.url, options)
                    .toPromise()
                    .then(this.extractCars.bind(this))
                    .catch(this.handleError);
  }
  
  private extractModels (res: Response) {
    let body = res.json();
    let attributes = body.Attributes;
    for (let entry of attributes){
        if (entry.Name == 'Model'){
            return entry.Options;
        }
    }  
    return [];
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
