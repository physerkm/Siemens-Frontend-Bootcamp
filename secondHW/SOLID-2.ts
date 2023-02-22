interface Formula {
    calculateForce(): number;
}

class LawOfUniversalGravitation implements Formula {
    mass1: number;
    mass2: number;
    distance: number;
    gravitationalConstant: number;
  
    constructor(mass1: number, mass2: number, distance: number, gravitationalConstant: number) {
        this.mass1 = mass1;
        this.mass2 = mass2;
        this.distance = distance;
        this.gravitationalConstant = gravitationalConstant;
    }
  
    calculateForce(): number {
      return (this.gravitationalConstant * this.mass1 * this.mass2) / (this.distance)**2;
    }
}

class secondLawOfMotion implements Formula {
    mass: number;
    acceleration: number;
  
    constructor(mass: number, acceleration: number) {
        this.mass = mass;
        this.acceleration = acceleration;
    }
  
    calculateForce(): number {
      return this.mass * this.acceleration;
    }
}
  

class ForceCalculator {
    calculateForce(formula: Formula): number {
      return formula.calculateForce();
    }
}