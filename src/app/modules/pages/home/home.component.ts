import { Component, inject, Input } from '@angular/core';
import { SideBarComponent } from '../../../core/layout/side-bar/side-bar.component';
import { TopBarComponent } from '../../../core/layout/top-bar/top-bar.component';
import { ProductCardComponent } from '../../../components/products/ui/product-card/product-card.component';
import { Product } from '../../../core/interface/product/product.model';
import { ProductService } from '../../../core/service/product/product.service';
import { catchError, map, of, shareReplay, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductsCarouselComponent } from "../../../components/products/ui/products-carousel/products-carousel.component";
import { CardPublicityComponent } from "../../../components/publicity/card-publicity/card-publicity.component";

@Component({
  selector: 'app-home',
  imports: [SideBarComponent, TopBarComponent, AsyncPipe, ProductsCarouselComponent, CardPublicityComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private productService = inject(ProductService);

  vm$ = this.productService.list().pipe(
    map((data: Product[]) => ({
      data,
      loading: false,
      error: null as string | null,
    })),
    startWith({ data: [] as Product[], loading: true, error: null }),
    catchError(() =>
      of({ data: [] as Product[], loading: false, error: 'No se pudo cargar' })
    ),
    shareReplay(1)
  );
}
