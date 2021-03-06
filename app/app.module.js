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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var title_component_1 = require('./title/title.component');
var form_component_1 = require('./form/form.component');
var progress_component_1 = require('./progress/progress.component');
var result_component_1 = require('./result/result.component');
var siumlar_cars_component_1 = require('./siumlar/siumlar.cars.component');
var trademe_api_service_1 = require('./trademe.api.service');
var assess_service_1 = require('./assess.service');
var error_component_1 = require('./error.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule],
            declarations: [
                app_component_1.AppComponent,
                title_component_1.TitleComponent,
                form_component_1.FormComponent,
                progress_component_1.ProgressComponent,
                result_component_1.ResultComponent,
                siumlar_cars_component_1.SimularCarsComponent,
                error_component_1.ErrorComponent],
            providers: [trademe_api_service_1.TrademeApiService, assess_service_1.AssessService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map