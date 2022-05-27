import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  active = 'Events';
  main = 'Events';

  constructor() { }

  ngOnInit(): void {
  }

}
