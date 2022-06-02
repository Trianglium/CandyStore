import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { flyInOut } from '../animations/app.animation';

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
    flyInOut()
  ]
})

export class MenuComponent implements OnInit {

  products: Product[];
  errMess: string;


  constructor(
    private productService: ProductService,
    @Inject('BaseURL') public BaseURL: any
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
     .subscribe(products => this.products = products,
       errmess => this.errMess = <any>errmess);
  }

}
