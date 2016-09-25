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
var TrademeApiService = (function () {
    function TrademeApiService(http) {
        this.http = http;
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
    TrademeApiService.prototype.extractMakers = function (res) {
        var body = res.json();
        return body.Subcategories || [];
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