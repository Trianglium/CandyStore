import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";


// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

// App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductService } from './services/product.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EventsComponent } from './events/events.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { BlogComponent } from './blog/blog.component';
import { EventService } from './services/event.service';
import { FeedbackService } from './services/feedback.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    EventsComponent,
    EventCalendarComponent,
    EventFeedComponent,
    BlogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    NgbModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [
    ProductService,
    EventService,
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
