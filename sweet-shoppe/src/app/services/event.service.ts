import { Injectable } from '@angular/core';
import { Event } from '../shared/event';
import { EVENTS } from '../shared/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Event[] {
    return EVENTS;
  }
}
