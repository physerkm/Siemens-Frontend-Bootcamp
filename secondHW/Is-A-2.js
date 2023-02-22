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
var Company = /** @class */ (function () {
    function Company(name, foundationYear, type, product) {
        this.name = name;
        this.foundationYear = foundationYear;
        this.isPublic = this.isPublic;
        this.product = product;
    }
    return Company;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, foundationYear, isPublic, product, multipleProducts) {
        var _this = _super.call(this, name, foundationYear, isPublic, product) || this;
        _this.multipleProducts = multipleProducts;
        return _this;
    }
    Apple.prototype.multi = function () {
        if (this.multipleProducts = true) {
            console.log("Great Company");
        }
    };
    return Apple;
}(Company));
var apple = new Apple("Apple Inc.", 1976, true, "iPhone", true);
console.log(apple.multi());
