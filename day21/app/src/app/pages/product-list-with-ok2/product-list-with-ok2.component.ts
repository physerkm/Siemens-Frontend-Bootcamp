import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductStateService } from 'src/app/states/product-state.service';

@Component({
  selector: 'app-product-list-with-ok2',
  templateUrl: './product-list-with-ok2.component.html',
  styleUrls: ['./product-list-with-ok2.component.css']
})
export class ProductListWithOk2Component implements OnInit {
  productList: Product[] = [];
  productListSubscription: Subscription | undefined;
  constructor(private productState: ProductStateService) {}

  ngOnDestroy(): void {
    this.productListSubscription?.unsubsribe();
  }
  ngOnInit(): void {
    this.productListSubscription = this.productState.productListObservable.subsribe(x => {
      console.table(x);
      this.productList = x.filter(x => x.isOk == true);
    })
  }
}
