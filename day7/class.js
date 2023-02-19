"use strict";

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    showDetails() {
        return `${this.name} ${this.maker} ${this.engine}`;
    }
}

var vehicle1 = new Vehicle("Model 1", "Renault", "Engine Renault")
var vehicle2 = new Vehicle("Model 2", "Opel", "Engine Opel")
console.log(vehicle1.showDetails())
console.log(vehicle2.showDetails())