class person {
    id: number;
    name: string;
    salary: number;
    childCount: number;

    calculateSalary() {
        return this.salary + (this.childCount * 1000);
    }
}

class JuniorDevPerson extends person {
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return this.salary * 2;
    }
}

class MidDevPerson extends person {
    age: number; 
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 4;
    }
}

class SeniorDevPerson extends person {
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 8;
    }
}

var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "Erkam";
junior.salary = 1000;
junior.childCount = 3;
console.log(`Junior salary calculation:${junior.calculateSalary()}`)

var mid = new MidDevPerson();
mid.id = 2;
mid.age = 29;
mid.name = "Merve";
mid.salary = 1000;
mid.childCount = 3;
console.log(`Mid salary calculation:${mid.calculateSalary()}`)

var senior = new SeniorDevPerson();
senior.id = 3;
senior.name = "Tuba";
senior.salary = 1000;
senior.childCount = 3;
console.log(`Senior salary calculation:${senior.calculateSalary()}`)

console.log("----------------------------------------");

let basePerson: person = junior;
console.log(`Base junior person salary calculation:${basePerson.calculateSalary()}`)
basePerson = mid;
console.log(`Base mid person salary calculation:${basePerson.calculateSalary()} - age: ${(basePerson as MidDevPerson).age}`)
basePerson = senior;
console.log(`Base senior person salary calculation:${basePerson.calculateSalary()}`)

var person5:person = new person();
person5.id = 5;
person5.name = "Merve";
person5.childCount = 2;
person5.salary = 2000;

// doğru yaklaşım değil.
// let mid5: JuniorDevPerson = person5;


