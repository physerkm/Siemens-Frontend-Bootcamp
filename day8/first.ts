let price: number = 28;
let price2: number = 26.19;
let name2: string = "Erkam";
let isShow: boolean = true;
let products: null = null;
let product: undefined = undefined;
let price3: any = 22;
price3.toFixed();
let price4: unknown= 35;
(price4 as number).toFixed();
(price4 as string).concat("abcdef");
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Erkam", "Rümeysa", "Taha"];
let productList: Array<string> = ["Pencil", "Notebook", "Computer", 23];
let value1: string | boolean = true;
let tuple: [string, number] = ["a", 8];

class Result {
    addition: number;
    subtraction: number;
    multiplication: number;
}


function calculate(a: number, b: number): [number, number, number] {
    return [a + b, a * b, a - b];
}

function calculate2(a: number, b: number): Result {
    var result = new Result();
    result.addition = a + b;
    result.subtraction = a - b;
    result.multiplication = a * b;
    return result;
}

console.log(`sum: ${calculate(3, 3)[0]}`)
console.log(`multiplying: ${calculate(3, 3)[0]}`)
console.log(`sum: ${calculate(3, 3)[0]}`)

// for
for (let index = 0; index < names.lenght; index++) {
    const element = names[index];
    console.log(element);
}

// class type
class Student {
    name: string;
    surName: string;
    age: number;
    constructor(name: string, surName: string, age: number) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    show() {
        console.log(`${this.name} ${this.surName} ${this.age}`)
    }
}

// Generic Class
class StudentGeneric<T1> {
    name: T1;
    surName: string;
    age: number;
    constructor(name: string, surName: string, age: number) {
        (this.name as string) = name;
        this.surName = surName;
        this.age = age;
    }
    show() {
        console.log(`${this.name} ${this.surName} ${this.age}`)
    }
}

var student1 = new Student("Tuba", "Yildiz", 31);
var student2 = new StudentGeneric<string
// var student2 = new Student(); // throw error
student1.show();

// Enum
enum Color {
    Red = 100, Green = 200, Blue = 300
}
enum Gender {
    Female, Male
}
var color: Color = Color.Red;
console.log(color);
console.log(Color[color]);

// function
function Add(a: number, b: number): number {
    // console.log(a + b);
    return a + b;
}

// generic function
function GenericAdd<T1, T2, T3>(a:T1, b:T2): T3{

    let sum = (a as number) + (b as number);
    // console.log(sum);
    // console.log(`${a} ${b}`)
    return sum as T3;
}

console.log(`Generic Add: ${GenericAdd<number, number, number>(2, 5)}`);

interface IPerson {
    name: string;
    age: number;
    calculate():void;
    show(id: string, name: string): number;
}
var person: IPerson = {name: "Erkam", age: 28, calculate:function () {}, show:function(id, name){return 5;} };

// Interfaces
class Person implements IPerson {
    name: string;
    age: number;
    calculate(): void {
        throw new Error("Method not implemented.");
    }
    show(id: string, name: string): number {
        throw new Error("Method not implemented.");
    }     
}

var p1 = new Person();
p1.age = 20;
p1.name = "Erkam";
p1.birthDate = new Date();

let person2: IPerson = p1;

var product5 = {id:1, name: "pencil", price: 3000};
var product6 = {id:1, name: "pencil", price: 3000};