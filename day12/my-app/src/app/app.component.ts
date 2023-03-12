import { Component } from '@angular/core';
import { IPerson, Person } from './models/person';
import { Product } from './models/product';
import { Product2 } from './models/product2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //one-way binding
  name: string = "angular";
  product: Product;
  product2: Product2;
  person: IPerson;
  person2: IPerson;
  constructor() {
    this.product = new Product(1, "pencil 1", 200);
    this.product2 = { id: 1, name: "pencil 2", price: 300 }

    this.person = { id: 1, name: "erkam", surname: "sis", age: 28 }
    this.person2 = new Person(1, "taha", "sis", 19);
  };

  change() {
    this.name = "angular 15";
  }
}
