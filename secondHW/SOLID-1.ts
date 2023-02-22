interface EnergyFormula {
  calculateEnergy(): number;
}

class PotentialEnergy implements EnergyFormula {
  mass: number;
  accelerationOfGravity: number;
  height: number;
  constructor(mass: number, accelerationOfGravity: number, height: number) {
    this.mass = mass;
    this.accelerationOfGravity = accelerationOfGravity;
  }
  
  calculateEnergy() {
    return this.mass * this.accelerationOfGravity * this.accelerationOfGravity;
  }
}

class KineticEnergy implements EnergyFormula {
  mass: number;
  speed: number;
  constructor(mass: number, speed: number) {
    this.mass = mass;
    this.speed = speed;
  }
  
  calculateEnergy() {
    return 0.5 * this.mass * (this.speed)**2;
  }
}