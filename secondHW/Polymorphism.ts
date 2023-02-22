interface Family {
    name: string;
    surname: string;
    age: number;
    getName(): string;
}

interface Member extends Family {
    job: string;
    heightCm: number;
}

const printName = (family: Family) => family.getName();

let person1: Family = {
    name: "Erkam",
    surname: "Sis",
    age: 28,
    getName() {return this.name}
};

let person2: Member = {
    name: "Taha",
    surname: "Sis",
    age: 18,
    job: "Student",
    heightCm: 170,
    getName() {return this.name}
};

let person3 = {
    name: "Rümeysa",
    surname: "Sis",
    age: 26,
    job: "Unemployed",
    heightCM: 160,
    getName() {return this.name}
};

