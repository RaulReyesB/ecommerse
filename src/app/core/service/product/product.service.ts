import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class productService {
  private http = inject(HttpClient);
  private api = 'https://api.escuelajs.co/api/v1/';
  
}
export class ProductService {
  constructor() {}
}
