class Person {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }   
}

class Student extends Person {
    classNo: number;
    constructor(name: string, age: number, gender: string, classNo: number) {
        super(name, age, gender);
        this.classNo = classNo;
    }
    goToWork() {
        console.log("You are a super slave student!");
    }
    sleep() {
        console.log("Finally, you are sleeping.")
    }
    doSomethingFun() {
        console.log("A little bit strange for a student in Turkey.")
    }
}

let student = new Student("Taha", 18, "Male", 12);

student.goToWork();
student.sleep();
student.doSomethingFun();

