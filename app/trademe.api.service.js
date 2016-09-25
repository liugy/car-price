"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var carinfo_1 = require('./carinfo');
var TrademeApiService = (function () {
    function TrademeApiService(http) {
        this.http = http;
        this.testing = true; // using sandbox now, since production key is not approved by trademe.co.nz.
        this.oauth = OAuth({
            consumer: {
                key: this.testing ? 'D523BBD5542EA96BCD08440B752CD81C' : 'C49656ECD94211DE6F1AAA5CC95BDD4B',
                secret: this.testing ? 'E8C34B9DCEC7711E0FE3A13A840AF8E4' : '7E2BE6F6C74C58E2FD05D0734588799B' //sandbox/production
            },
            signature_method: 'HMAC-SHA1',
            hash_function: function (base_string, key) {
                return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
            }
        });
        this.token = {
            key: this.testing ? '3294B1837135195D5F4B819AAC950FF7' : 'BCE4AC1A54060EC75BED28BA3C11ECB2',
            secret: this.testing ? 'B65D2A91DC59A1E1B4CB6FA18FF42F99' : '86DFC02B93D55568E6D2344C9BCC667A' //sandbox/production
        };
        this.makersUrl = 'http://api.trademe.co.nz/v1/Categories/UsedCars.json';
    }
    TrademeApiService.prototype.searchModelUrl = function (catagoryNumber) {
        return "https://api.trademe.co.nz/v1/Categories/" + catagoryNumber + "/Details.json";
    };
    TrademeApiService.prototype.getMakers = function () {
        return this.http.get(this.makersUrl)
            .toPromise()
            .then(this.extractMakers)
            .catch(this.handleError);
    };
    TrademeApiService.prototype.searchModels = function (catagoryNumber) {
        return this.http.get(this.searchModelUrl(catagoryNumber))
            .toPromise()
            .then(this.extractModels)
            .catch(this.handleError);
    };
    TrademeApiService.prototype.querySimularCars = function (formInfo) {
        var request_data = {
            url: this.testing ? "https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json?Make=" + formInfo.Make + "&Model=" + formInfo.Model + "&year_max=" + (formInfo.Year + 1) + "&year_min=" + (formInfo.Year - 1) : "https://api.trademe.co.nz/v1/Search/Motors/Used.json?Make=" + formInfo.Make + "&Model=" + formInfo.Model + "&year_max=" + (formInfo.Year + 1) + "&year_min=" + (formInfo.Year - 1),
            method: 'GET',
            data: {}
        };
        var headers = this.oauth.toHeader(this.oauth.authorize(request_data, this.token));
        var options = new http_2.RequestOptions({
            headers: headers
        });
        return this.http.get(request_data.url, options)
            .toPromise()
            .then(this.extractCars.bind(this))
            .catch(this.handleError);
    };
    TrademeApiService.prototype.extractMakers = function (res) {
        var body = res.json();
        return body.Subcategories || [];
    };
    TrademeApiService.prototype.extractCars = function (res) {
        var result = new Array();
        var body = res.json();
        var price;
        for (var _i = 0, _a = body.List; _i < _a.length; _i++) {
            var entry = _a[_i];
            try {
                price = Number(entry.PriceDisplay.substring(entry.PriceDisplay.indexOf("$") + 1, entry.PriceDisplay.length).replace(',', ''));
            }
            catch (ex) {
                price = 0;
            }
            if (price != 0) {
                result.push(new carinfo_1.CarInfo(entry.ListingId, entry.Title, price, entry.Year, entry.Odometer, entry.EngineSize, entry.Transmission));
            }
        }
        return result || [];
    };
    TrademeApiService.prototype.queryMoreCars = function (formInfo) {
        var request_data = {
            url: this.testing ? "https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json?Make=" + formInfo.Make + "&Model=" + formInfo.Model : "https://api.trademe.co.nz/v1/Search/Motors/Used.json?Make=" + formInfo.Make + "&Model=" + formInfo.Model,
            method: 'GET',
            data: {}
        };
        var headers = this.oauth.toHeader(this.oauth.authorize(request_data, this.token));
        var options = new http_2.RequestOptions({
            headers: headers
        });
        return this.http.get(request_data.url, options)
            .toPromise()
            .then(this.extractCars.bind(this))
            .catch(this.handleError);
    };
    TrademeApiService.prototype.extractModels = function (res) {
        var body = res.json();
        var attributes = body.Attributes;
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var entry = attributes_1[_i];
            if (entry.Name == 'Model') {
                return entry.Options;
            }
        }
        return [];
    };
    TrademeApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    TrademeApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TrademeApiService);
    return TrademeApiService;
}());
exports.TrademeApiService = TrademeApiService;
//# sourceMappingURL=trademe.api.service.js.map