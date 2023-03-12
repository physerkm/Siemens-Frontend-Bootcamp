import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  public productList: Product[] = [];
  public productListObservable = undefined;
  private productListSubject: Subject<Product[]> = new Subject<Product[]>();

  constructor() {
    this.productListObservable = this.productListSubject.asObservable();
  }
  add(newProduct: Product) {
    this.productList.push(newProduct);

    this.productListSubject.next(this.productList); 
  
  }
}
