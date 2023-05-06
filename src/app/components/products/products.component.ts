import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: './assets/images/pc-dañado.png',
      price: 5000
    },
    {
      id: 2,
      name: 'Product 2',
      image: './assets/images/pc-dañado.png',
      price: 6000
    },
    {
      id: 3,
      name: 'Product 3',
      image: './assets/images/pc-dañado.png',
      price: 7000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
