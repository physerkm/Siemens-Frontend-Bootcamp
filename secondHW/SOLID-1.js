var PotentialEnergy = /** @class */ (function () {
    function PotentialEnergy(mass, accelerationOfGravity, height) {
        this.mass = mass;
        this.accelerationOfGravity = accelerationOfGravity;
    }
    PotentialEnergy.prototype.calculateEnergy = function () {
        return this.mass * this.accelerationOfGravity * this.accelerationOfGravity;
    };
    return PotentialEnergy;
}());
var KineticEnergy = /** @class */ (function () {
    function KineticEnergy(mass, speed) {
        this.mass = mass;
        this.speed = speed;
    }
    KineticEnergy.prototype.calculateEnergy = function () {
        return 0.5 * this.mass * Math.pow((this.speed), 2);
    };
    return KineticEnergy;
}());
