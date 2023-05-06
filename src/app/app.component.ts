import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

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

  onLoaded(img: string){
    console.log('log desde el padre', img);
    
  }
}
