import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProducts(id);
  }
  goBack(): void {
    this.location.back();
  }

}
