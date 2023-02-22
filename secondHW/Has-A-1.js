var MyHomework = /** @class */ (function () {
    function MyHomework(courseName, isHard, deadline, numberOfQuestion) {
        this.courseName = courseName;
        this.isHard = isHard;
        this.deadline = deadline;
        this.numberOfQuestion = numberOfQuestion;
    }
    MyHomework.prototype.changePermission = function () {
        console.log("Change not permitted.");
    };
    return MyHomework;
}());
var myHomework = new MyHomework("Frond end Developer", false, "5 days", 10);
myHomework.changePermission();
