import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interface/product/product.model';
import { API_BASE_URL } from '../../tokens/api-base-url.token';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }

  /*
  get(): Observable<Product> {
    return this.http.get<Product[]>(`${this.baseUrl}/product`);
  }
    */
  constructor() {}
}
