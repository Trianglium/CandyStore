import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
import { ProductService } from '../services/product.service';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    .then(products => this.products = products);
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

}
