
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Maker } from './maker';
import { Model } from './model';

@Injectable()
export class TrademeApiService {
  constructor (private http: Http) {}
    
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
  
  private extractMakers (res: Response) {
    let body = res.json();
    return body.Subcategories || [];
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
