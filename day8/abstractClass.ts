abstract class Person {
    id: number;
    name: string;

    abstract show();
    abstract details(a: number);
}

class Person2 extends BasePerson {
    show() {
        console.log(`${this.id} ${})
    }
}