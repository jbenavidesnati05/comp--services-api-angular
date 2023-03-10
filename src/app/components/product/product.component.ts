import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


 @Input() product : Product= {
    id:" ",
    name:" ",
    price:0,
    image:" ",
  }

  @Output() addProduct  = new EventEmitter<Product>()

  onAddCart(){
    this.addProduct.emit(this.product)
  }
}
