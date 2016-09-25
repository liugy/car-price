"use strict";
var CarInfo = (function () {
    function CarInfo(ListingId, Title, Price, Year, Odometer, EngineSize, Transmission) {
        this.ListingId = ListingId;
        this.Title = Title;
        this.Price = Price;
        this.Year = Year;
        this.Odometer = Odometer;
        this.EngineSize = EngineSize;
        this.Transmission = Transmission;
    }
    return CarInfo;
}());
exports.CarInfo = CarInfo;
//# sourceMappingURL=carinfo.js.map