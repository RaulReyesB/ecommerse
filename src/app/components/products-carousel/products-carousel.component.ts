import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../core/interface/product/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products-carousel',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss',
})
export class ProductsCarouselComponent {
  @Input() products: Product[] = [];
  @ViewChild('track') track!: ElementRef<HTMLElement>;

  private scrollByPage(direction: 1 | -1) {
    const el = this.track?.nativeElement;
    if (!el) return;

    const delta = Math.round(el.clientWidth * 0.9) * direction;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }
  prev() {
    this.scrollByPage(-1);
  }
  next() {
    this.scrollByPage(1);
  }

  limitedProducts: Product[] = [];

  ngOnChanges() {
    this.limitedProducts = this.products.slice(0, 12);
  }
}
