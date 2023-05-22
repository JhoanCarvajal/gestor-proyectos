import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public shoppingCart: Product[] = [];
  public total = 0;

  products: Product[] = [];
  productChosen!: Product;

  isShowProductDetail = false;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.shoppingCart = this.storeService.getShoppingCart();
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.isShowProductDetail = !this.isShowProductDetail;
  }

  showProductDetail(id: number) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

}
