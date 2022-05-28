import { Injectable } from '@angular/core';
import { Event } from '../shared/event';
import { EVENTS } from '../shared/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  today: number = Date.now();

  constructor() { }

    getEvents(): Event[] {
      return EVENTS;
    }

    getEvent(id: string): Event {
      return EVENTS.filter((event) => (event.id === id))[0];
    }

    getUpcomingEvent(): Event {
      return EVENTS.filter((event) => event.startdate)[0];
    }

}
