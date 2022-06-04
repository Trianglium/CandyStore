import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MenuComponent } from './menu.component';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { PRODUCTS } from '../shared/products';
import { baseURL } from '../shared/baseurl';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {

    const productServiceStub = {
      getProducts: function(): Observable<Product[]> {
        return of(PRODUCTS);
      }
    };

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: ProductService, useValue: productServiceStub },
        { provide: 'baseURL', useValue: baseURL },
      ]
    })
    .compileComponents();

    const productservice = TestBed.get(ProductService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test to check products on menu
  it('products items should be 4', () => {
    expect(component.products.length).toBe(4);
    expect(component.products[1].name).toBe('Zucchipakoda');
    expect(component.products[3].featured).toBeFalsy();
  });

  // Test to check if the template is correctly getting the information for rendering the view
  it('should use products in the template', () => {
    fixture.detectChanges();

    let de:      DebugElement;
    let el:      HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toContain(PRODUCTS[0].name.toUpperCase());

  });

});
