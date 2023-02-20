import {Component} from '@angular/core';
import {Product} from 'src/app/models/product';

@Component({
    selector: 'app-structural-directive',
    templateUrl: './'
})

export class StructuralDirectiveComponent {
    toggleShow: boolean = true;
    productList: Product[] = [];
    constructor() {
        this.productList.push(new Product(1, "pencil"))
    }
}