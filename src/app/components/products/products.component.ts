import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productchosen:Product={
    id:'',
    title:'',
    price:0,
    images:[],
    category:{
      id  :"",
      name:""
    },
    description:'',
  }


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  onAddShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail
  }
  onShowdetail(id:string){
    this.productsService.getProduct(id)
    .subscribe(data =>{
      this.productchosen = data;
      this.toggleProductDetail()
      console.log('product',data);
    })
  }
}
