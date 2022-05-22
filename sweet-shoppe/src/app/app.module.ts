import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
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
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
