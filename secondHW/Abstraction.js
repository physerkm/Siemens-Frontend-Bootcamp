var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Country = /** @class */ (function () {
    function Country(capital, population, timeZone, officialLanguage, northHemisphere) {
        this.capital = capital;
        this.population = population;
        this.timeZone = timeZone;
        this.officialLanguage = officialLanguage;
        this.northHemisphere = northHemisphere;
    }
    return Country;
}());
var Turkey = /** @class */ (function (_super) {
    __extends(Turkey, _super);
    function Turkey(capital, population, timeZone, officialLanguage, northHemisphere) {
        return _super.call(this, capital, population, timeZone, officialLanguage, northHemisphere) || this;
    }
    Turkey.prototype.welcome = function () {
        var welc;
        welc = "Welcome to " + this.capital;
        return welc;
    };
    return Turkey;
}(Country));
var country = new Turkey("Ankara", 84780000, 'GMT+3', "Turkish", true);
console.log(country.welcome());
