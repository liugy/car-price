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
require('../rxjs-operators');
var trademe_api_service_1 = require('../trademe.api.service');
var mock_years_1 = require('../test/mock.years');
var FormComponent = (function () {
    function FormComponent(trademeService) {
        this.trademeService = trademeService;
        this.isAssessing = false;
        this.mode = 'Promise';
    }
    FormComponent.prototype.ngOnInit = function () {
        this.years = mock_years_1.YEARS;
        this.getMakers();
    };
    FormComponent.prototype.getMakers = function () {
        var _this = this;
        this.trademeService.getMakers()
            .then(function (makers) { return _this.makers = makers; }, function (error) { return _this.errorMessage = error; });
    };
    FormComponent.prototype.changeMaker = function (newMakerNumber) {
        var _this = this;
        if (!newMakerNumber) {
            return;
        }
        this.trademeService.searchModels(newMakerNumber)
            .then(function (models) { return _this.models = models; }, function (error) { return _this.errorMessage = error; });
    };
    FormComponent.prototype.clickStart = function () {
        this.isAssessing = true;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'assessor-form',
            templateUrl: 'assessor-form.html'
        }), 
        __metadata('design:paramtypes', [trademe_api_service_1.TrademeApiService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map