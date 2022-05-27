import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { ProductComponent } from '../product/product.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { EventsComponent } from '../events/events.component';
import { EventCalendarComponent } from '../event-calendar/event-calendar.component';
import { EventFeedComponent } from '../event-feed/event-feed.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'menu', 
    component: MenuComponent,
    children: [
      { path: 'product', component: ProductComponent }
    ]
  },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: 'calendar', component: EventCalendarComponent },
      { path: 'feed', component: EventFeedComponent }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];