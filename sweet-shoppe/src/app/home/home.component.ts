import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Event } from '../shared/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
    this.event = this.event.eventservice.getUpcomingEvent();
  }

}
