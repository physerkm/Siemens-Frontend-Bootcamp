class Company {
    name: string;
    foundationYear: number;
    isPublic: boolean;
    product: string;
    constructor(name: string, foundationYear: number, type: boolean, product: string) {
        this.name = name;
        this.foundationYear = foundationYear;
        this.isPublic = this.isPublic;
        this.product = product;
    }
}

class Apple extends Company {
    multipleProducts: boolean;
    constructor(name: string, foundationYear: number, isPublic: boolean, product: string, multipleProducts: boolean) {
        super(name, foundationYear, isPublic, product);
        this.multipleProducts = multipleProducts;
    }
    multi() {
        if (this.multipleProducts = true) {
            console.log("Great Company");
        }
    }
}

let apple = new Apple("Apple Inc.", 1976, true, "iPhone", true);
console.log(apple.multi());