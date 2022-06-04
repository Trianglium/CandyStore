import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { baseURL } from './shared/baseurl';

import { MenuComponent } from './menu/menu.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


import { ProductService } from './services/product.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';
import { EventsComponent } from './events/events.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    EventsComponent,
    EventFeedComponent,
    EventCalendarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgbModule,
    MatIconModule
  ],
  providers: [
    ProductService,
    PromotionService,
    LeaderService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHTTPMsgService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
