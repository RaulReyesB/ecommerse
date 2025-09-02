import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { Product } from '../../core/interface/product/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {

}
