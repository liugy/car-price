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
var price_index_pair_1 = require('./price.index.pair');
var AssessService = (function () {
    function AssessService() {
    }
    AssessService.prototype.assess = function (cars, formInfo) {
        this.myPriceIndex = this.calcIndex(formInfo.Year, formInfo.Odometer);
        this.convertToPriceIndexPair(cars);
        return this.averagePrice();
    };
    AssessService.prototype.convertToPriceIndexPair = function (cars) {
        this.big5pair = new Array();
        this.small5pair = new Array();
        var priceIndex = 0;
        for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
            var car = cars_1[_i];
            if (car.Price > 0) {
                priceIndex = this.calcIndex(car.Year, car.Odometer);
                if (priceIndex > 0) {
                    if (priceIndex > this.myPriceIndex) {
                        this.big5pair.push(new price_index_pair_1.PriceIndexPair(priceIndex, car.Price));
                        if (this.big5pair.length > 5) {
                            this.deleteMaxIndex();
                        }
                    }
                    else {
                        this.small5pair.push(new price_index_pair_1.PriceIndexPair(priceIndex, car.Price));
                        if (this.small5pair.length < 5) {
                            this.deleteMinIndex();
                        }
                    }
                }
            }
        }
    };
    AssessService.prototype.deleteMaxIndex = function () {
        var pointer = 0;
        for (var i = 1; i < this.big5pair.length; i++) {
            if (this.big5pair[i].index > this.big5pair[pointer].index) {
                pointer = i;
            }
        }
        this.big5pair.splice(pointer, 1);
    };
    AssessService.prototype.deleteMinIndex = function () {
        var pointer = 0;
        for (var i = 1; i < this.small5pair.length; i++) {
            if (this.small5pair[i].index < this.small5pair[pointer].index) {
                pointer = i;
            }
        }
        this.big5pair.splice(pointer, 1);
    };
    AssessService.prototype.averagePrice = function () {
        var total = 0;
        var count = 0;
        for (var _i = 0, _a = this.big5pair; _i < _a.length; _i++) {
            var pair = _a[_i];
            console.log(pair);
            total += pair.price;
            count++;
        }
        for (var _b = 0, _c = this.small5pair; _b < _c.length; _b++) {
            var pair = _c[_b];
            console.log(pair);
            total += pair.price;
            count++;
        }
        if (count == 0)
            return 0;
        return total / count;
    };
    AssessService.prototype.calcIndex = function (year, odometer) {
        var yearIndex = (20 - (new Date().getFullYear() - year)) * 5;
        var odoIndex = (300000 - odometer) / 3000;
        if (odoIndex <= 0)
            return 0;
        if (yearIndex <= 0)
            return 0;
        if (year <= 0)
            return 0;
        if (odoIndex <= 0)
            return 0;
        return (yearIndex * odoIndex * 100);
    };
    AssessService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AssessService);
    return AssessService;
}());
exports.AssessService = AssessService;
//# sourceMappingURL=assess.service.js.map