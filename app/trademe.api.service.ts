
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Maker } from './maker';

//import { CATEGORY }     from './test/mock.makers';

@Injectable()
export class TrademeApiService {
      constructor (private http: Http) {}
  private makersUrl = 'http://api.trademe.co.nz/v1/Categories/UsedCars.json';  // URL to web API
  
  getMakers (): Promise<Maker[]> {
    return this.http.get(this.makersUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log("extraData:");
    console.log(body);
    return body.Subcategories || { };
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
