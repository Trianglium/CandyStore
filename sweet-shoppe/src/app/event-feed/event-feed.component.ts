import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../shared/event';
import { EventService } from '../services/event.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class EventFeedComponent implements OnInit {

  events: Event[];
  errMess: string;


  constructor(
    private eventService: EventService,
    @Inject('BaseURL') public BaseURL: any
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents()
     .subscribe(events => this.events = events,
       errmess => this.errMess = <any>errmess);
  }

}
