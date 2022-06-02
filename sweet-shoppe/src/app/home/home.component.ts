import { Component, OnInit, Inject } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  product: Product;
  promotion: Promotion;
  leader: Leader;
  ProductErrMess: string;

  constructor(
    private productservice: ProductService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') public BaseURL: any
  ) { }

  ngOnInit(): void {
    this.productservice.getFeaturedProduct()
      .subscribe(product => this.product = product,
      producterrmess => this.ProductErrMess = <any>producterrmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
  }

}
