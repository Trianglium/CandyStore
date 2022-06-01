import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Event } from '../shared/event';
import { EventService } from '../services/event.service';
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
  event: Event;

  constructor(
    private productservice: ProductService,
    private eventservice: EventService
  ) { }

  ngOnInit(): void {
    this.product = this.productservice.getFeaturedProduct();
    this.event = this.eventservice.getUpcomingEvent();
  }

}
