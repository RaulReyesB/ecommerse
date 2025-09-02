import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../../../core/service/product/product.service';
import { catchError, map, of, shareReplay, startWith } from 'rxjs';
import { Product } from '../../../../core/interface/product/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;


  starts: number[] = [1, 2, 3, 4, 5];
}
