import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from 'src/app/states/product-state.service';

@Component({
  selector: 'app-product-list-with-ok',
  templateUrl: './product-list-with-ok.component.html',
  styleUrls: ['./product-list-with-ok.component.css']
})
export class ProductListWithOkComponent {
  product: Product[] = [];
  
  constructor(private productState: ProductStateService) {
    this.products = this.productState.productList.filter(x => x.isOk == true);
  }
  load() {
    this.products = this.productState.productList.filter(x => x.isOk == true);
  }
}
