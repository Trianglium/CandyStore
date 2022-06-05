import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Event } from '../shared/event';
import { EVENTS } from '../shared/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getEvents(): Observable<Event[]> {
      return this.http.get<Event[]>(baseURL + 'events')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getEvent(id: string): Observable<Event> {
      return this.http.get<Event>(baseURL + 'events/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getFeaturedEvent(): Observable<Event> {
      return this.http.get<Event[]>(baseURL + 'events?featured=true').pipe(map(events => events[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }


}

