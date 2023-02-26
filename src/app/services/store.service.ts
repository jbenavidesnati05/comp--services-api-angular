import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  myShoppingCart:Product[] = [];

  addProduct(product:Product){
    this.myShoppingCart.push(product);
    console.log(product);

  }
  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price,0)
  }

}
