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
require('./rxjs-operators');
var trademe_api_service_1 = require('./trademe.api.service');
var assess_service_1 = require('./assess.service');
var AppComponent = (function () {
    function AppComponent(trademeService, assessService) {
        this.trademeService = trademeService;
        this.assessService = assessService;
        this.assessment = 0;
        this.title = "Alan's car assessment tool";
    }
    AppComponent.prototype.checkCars = function (cars, formInfo) {
        var _this = this;
        if (cars.length < 10) {
            this.trademeService.queryMoreCars(formInfo)
                .then(function (simularCars) { return _this.processCars(simularCars, formInfo); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.processCars(cars, formInfo);
        }
    };
    AppComponent.prototype.processCars = function (cars, formInfo) {
        if (cars && cars.length > 0) {
            this.simularCars = cars;
            this.assess(formInfo);
        }
        else {
            this.errorMessage = "Can not assess, since no relative data found. Please choose Toyota RAV4 with the trademe sandbox";
        }
    };
    AppComponent.prototype.assess = function (formInfo) {
        this.assessment = this.assessService.assess(this.simularCars, formInfo);
    };
    AppComponent.prototype.onStart = function (formInfo) {
        var _this = this;
        this.trademeService.querySimularCars(formInfo)
            .then(function (simularCars) { return _this.checkCars(simularCars, formInfo); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onError = function (message) {
        this.errorMessage = message;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'car-assessor-app',
            templateUrl: 'car-assessor.html'
        }), 
        __metadata('design:paramtypes', [trademe_api_service_1.TrademeApiService, assess_service_1.AssessService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map