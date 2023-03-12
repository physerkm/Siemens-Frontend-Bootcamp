import { Product } from './models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  private productList: Product[] = [];

  load() {
    this.productList.push({id: 1, name: 'pencil 1', price: 100, stock: 20, category: 'pencils', color: 'red'});
    this.productList.push({id: 2, name: 'pencil 2', price: 200, stock: 40, category: 'pencils', color: 'blue'});
    this.productList.push({id: 3, name: 'pencil 3', price: 300, stock: 60, category: 'pencils', color: 'green'});
  }
  constructor() {
    this.load();
  }
  getList(): ReadonlyArray<Product> {
    return this.productList as ReadonlyArray<Product>;
  }

  getById(id: number) {
    return this.productList.find((x) => x.id == id);
  }

  add(newProduct: Product) {
    this.productList.push(newProduct);
  }
  update(updateProduct: Product) {
    let productIndexToUpdate = this.productList.findIndex(
      (x) => x.id == updateProduct.id
    );

    this.productList[productIndexToUpdate].name = updateProduct.name;
    this.productList[productIndexToUpdate].price = updateProduct.price;
    this.productList[productIndexToUpdate].stock = updateProduct.stock;
    this.productList[productIndexToUpdate].category = updateProduct.category;
    this.productList[productIndexToUpdate].color = updateProduct.color;
  }
  delete(id: number) {
    this.productList = this.productList.filter((x) => x.id != id);
  }
}
