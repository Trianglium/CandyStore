import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { EventsComponent } from '../events/events.component';

export const routes: Routes = [
  { 
    path: 'home',  
    component: HomeComponent 
  },
  { 
    path: 'menu',     
    component: MenuComponent 
  },
  { 
    path: 'contact',     
    component: ContactComponent 
  },
  { 
    path: 'about',
    component: AboutComponent 
  },
  { 
    path: 'productdetail/:id',
    component: ProductdetailComponent 
  },
  { 
    path: 'events',     
    component: EventsComponent 
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
