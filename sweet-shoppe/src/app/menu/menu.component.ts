import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;





  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

}
