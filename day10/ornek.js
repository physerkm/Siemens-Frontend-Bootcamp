var SizeType;
(function (SizeType) {
    SizeType[SizeType["Large"] = 0] = "Large";
    SizeType[SizeType["Medium"] = 1] = "Medium";
    SizeType[SizeType["Small"] = 2] = "Small";
})(SizeType || (SizeType = {}));
var LargeCalculate = /** @class */ (function () {
    function LargeCalculate() {
    }
    LargeCalculate.prototype.calculate = function (size) {
        return size * 1.14;
    };
    return LargeCalculate;
}());
var MediumCalculate = /** @class */ (function () {
    function MediumCalculate() {
    }
    MediumCalculate.prototype.calculate = function (size) {
        return size * 1.07;
    };
    return MediumCalculate;
}());
var SmallCalculate = /** @class */ (function () {
    function SmallCalculate() {
    }
    SmallCalculate.prototype.calculate = function (size) {
        return size * 1.00;
    };
    return SmallCalculate;
}());
var SizeCalculate = /** @class */ (function () {
    function SizeCalculate() {
    }
    SizeCalculate.prototype.calculate = function (size, sizeCalculate) {
        return sizeCalculate.calculate(size);
    };
    return SizeCalculate;
}());
var sizeCalculate = new SizeCalculate();
var externalSizeType = SizeType.Large;
var externalSize = 14;
var sizeArray = [];
sizeArray.push({ sizeType: SizeType.Large, SizeCalculate: new LargeCalculate() });
sizeArray.push({ sizeType: SizeType.Medium, SizeCalculate: new MediumCalculate() });
sizeArray.push({ sizeType: SizeType.Small, SizeCalculate: new SmallCalculate() });
var currentSize = sizeArray.find(function (x) { return x.sizeType == externalSizeType; });
console.log(currentSize === null || currentSize === void 0 ? void 0 : currentSize.SizeCalculate.calculate(externalSize));
