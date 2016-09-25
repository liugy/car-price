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
var forminfo_1 = require('../forminfo');
var FormComponent = (function () {
    function FormComponent(trademeService) {
        this.trademeService = trademeService;
        this.isAssessing = false;
        this.mode = 'Promise';
        this.onStart = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.years = mock_years_1.YEARS;
        this.getMakers();
    };
    FormComponent.prototype.getMakers = function () {
        var _this = this;
        this.trademeService.getMakers()
            .then(function (makers) { return _this.initMakers(makers); }, function (error) { return _this.handleError(error); });
    };
    FormComponent.prototype.initMakers = function (newMakers) {
        this.makers = newMakers;
        if (this.makers && this.makers.length > 0)
            this.changeMaker(this.makers[0].Number);
    };
    FormComponent.prototype.handleError = function (message) {
        this.onError.emit(message);
    };
    FormComponent.prototype.changeMaker = function (newMakerNumber) {
        var _this = this;
        this.selectedModel = null;
        for (var _i = 0, _a = this.makers; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.Number == newMakerNumber) {
                this.selectedMakeName = entry.Name;
                break;
            }
        }
        if (!newMakerNumber) {
            return;
        }
        this.trademeService.searchModels(newMakerNumber)
            .then(function (models) { return _this.models = models; }, function (error) { return _this.handleError(error); });
    };
    FormComponent.prototype.changeModel = function (newModel) {
        this.selectedModel = newModel;
    };
    FormComponent.prototype.changeYear = function (newYear) {
        this.selectedYear = Number(newYear);
    };
    FormComponent.prototype.changeKilometers = function (newKilo) {
        console.log(newKilo);
        this.selectedKilometers = Number(newKilo);
        if (isNaN(this.selectedKilometers)) {
            this.handleError("Please input number in Kilometres field");
        }
        console.log(this.selectedKilometers);
    };
    FormComponent.prototype.clickStart = function () {
        if (isNaN(this.selectedKilometers)) {
            this.handleError("Please input number in Kilometres field");
            return;
        }
        if (!this.models || this.models.length == 0)
            return;
        this.handleError(null);
        this.onStart.emit(new forminfo_1.FormInfo(this.selectedMakeName || this.makers[0].Name, this.selectedModel || this.models[0].Value, this.selectedYear || Number(this.years[0].Value), this.selectedKilometers || 50000));
        //      this.isAssessing = true;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "onError", void 0);
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