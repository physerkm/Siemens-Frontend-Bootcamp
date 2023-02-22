var LawOfUniversalGravitation = /** @class */ (function () {
    function LawOfUniversalGravitation(mass1, mass2, distance, gravitationalConstant) {
        this.mass1 = mass1;
        this.mass2 = mass2;
        this.distance = distance;
        this.gravitationalConstant = gravitationalConstant;
    }
    LawOfUniversalGravitation.prototype.calculateForce = function () {
        return (this.gravitationalConstant * this.mass1 * this.mass2) / Math.pow((this.distance), 2);
    };
    return LawOfUniversalGravitation;
}());
var secondLawOfMotion = /** @class */ (function () {
    function secondLawOfMotion(mass, acceleration) {
        this.mass = mass;
        this.acceleration = acceleration;
    }
    secondLawOfMotion.prototype.calculateForce = function () {
        return this.mass * this.acceleration;
    };
    return secondLawOfMotion;
}());
var ForceCalculator = /** @class */ (function () {
    function ForceCalculator() {
    }
    ForceCalculator.prototype.calculateForce = function (formula) {
        return formula.calculateForce();
    };
    return ForceCalculator;
}());
