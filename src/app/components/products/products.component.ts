import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart:Product[] = [];
  total = 0;
  products:Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/200'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/200'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/200'
    },
  ];
  constructor(
    private storeService: StoreService
  ){
      this.myShoppingCart = this.storeService.getMyShoppingCart();
    }

  onAddShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total =  this.storeService.getTotal();

  }
}
