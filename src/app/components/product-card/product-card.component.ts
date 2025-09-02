import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../core/service/product/product.service';
import { catchError, map, of, startWith } from 'rxjs';
import { Product } from '../../core/interface/product/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  private productService = inject(ProductService);
  limit = 10;

  vm$ = this.productService.list().pipe(
    map((data: Product[]) => ({
      data,
      loading: false,
      error: null as string | null,
    })),
    startWith({ data: [] as Product[], loading: true, error: null }),
    catchError(() =>
      of({ data: [] as Product[], loading: false, error: 'No se pudo cargar' })
    )
  );

  trackById = (_: number, product: Product) => product.id;

  starts: number[] = [1, 2, 3, 4, 5];
}
