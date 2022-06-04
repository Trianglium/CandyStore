import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL + 'products')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(baseURL + 'products/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedProduct(): Observable<Product> {
    return this.http.get<Product[]>(baseURL + 'products?featured=true').pipe(map(products => products[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProductIds(): Observable<number[] | any> {
    return this.getProducts().pipe(map(products => products.map(product => product.id)))
      .pipe(catchError(error => error));
  }
  // Leverage the PUT method to save changes to the object back to the server
  putProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Product>(baseURL + 'products/' + product.id, product, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }


}
