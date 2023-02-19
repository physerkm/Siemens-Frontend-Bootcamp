"use strict";

class Person {
    static #ageConst = 60;
    constructor(name, age) {
        this.name = name; // instance variable
        this.age = age;
    }
    calculate (ageConst2) {
        console.log(`${this.name}${ageConst2 - thisage}`)
    }
}

var p1 = new Person("Erkam", 28);
p1.calculate();
var p2 = new Person("Merve", 29);

console.log(Person.ageConst);
console.log(`${p1.name}${Person.ageConst - p1.age}`)
console.log(`${p2.name}${Person.ageConst - p2.age}`)

Person.ageConst = 100;
console.log(`${p1.name}${Person.ageConst - p1.age}`)
console.log(`${p2.name}${Person.ageConst - p2.age}`)


class Product {
    #stock = 500 //pricate property
    constructor() {
        var name;
        var price;
    }
    setStock(stock) {
        if (stock > 1000) {
            #stock = stock;
        }
        else
            throw "Stock değeri 1000'den fazla olmalıdır."
    }

    getStock
    setPrice(price) {
        if (price > 1 && price < 100) {
            this.price = price;
        }
        else {
            throw "Price değeri 1 ile 100 arasında olmalıdır.";
        }
    }
    getPrice() {
        return this.price
    }
    // public method
    publicCalculate() {
        return this.#Calculate();
    }
    // private method
    #Calculate() {
        return 10;
    }    
}

// Access Modifiers
  // public, private, protected

var product = new Product();
product.setPrice(5);
console.log(product.getPrice());
console.log(product.publicCalculate());
console.log(product.Calculate());