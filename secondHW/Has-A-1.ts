interface Homework {
    courseName: string; // Property
    isHard: boolean; // Property
    deadline: string; // Property
    numberOfQuestion: number; // Property
    changePermission(): void; // Method
}

class MyHomework implements Homework {
    courseName: string;
    isHard: boolean;
    deadline: string;
    numberOfQuestion: number;
    constructor(courseName: string, isHard: boolean, deadline: string, numberOfQuestion: number) {
        this.courseName = courseName;
        this.isHard = isHard;
        this.deadline = deadline;
        this.numberOfQuestion = numberOfQuestion;
    }
    changePermission(): void {
        console.log("Change not permitted.");
    }
}

let myHomework: MyHomework = new MyHomework("Frond end Developer", false, "5 days", 10);
myHomework.changePermission();