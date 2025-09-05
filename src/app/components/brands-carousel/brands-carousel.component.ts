import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BrandModel } from '../../core/interface/product/brand.model';
@Component({
  selector: 'app-brands-carousel',
  imports: [],
  templateUrl: './brands-carousel.component.html',
  styleUrl: './brands-carousel.component.scss',
})
export class BrandsCarouselComponent {
  @Input() brands: BrandModel[] = [];
  @Input() selected: string | null = null;
  @Output() select = new EventEmitter<HTMLElement>();

  limitedBrands: BrandModel[] = [];

  @ViewChild('track') track!: ElementRef<HTMLElement>;

  ngOnChanges() {
    this.limitedBrands = (this.brands ?? []).slice(0.7);
  }

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
}
