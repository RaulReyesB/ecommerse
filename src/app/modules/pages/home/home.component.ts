import { Component, inject, Input } from '@angular/core';
import { SideBarComponent } from '../../../core/layout/side-bar/side-bar.component';
import { TopBarComponent } from '../../../core/layout/top-bar/top-bar.component';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { Product } from '../../../core/interface/product/product.model';
import { ProductService } from '../../../core/service/product/product.service';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  of,
  shareReplay,
  startWith,
} from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from '../../../components/products-carousel/products-carousel.component';
import { CardPublicityComponent } from '../../../components/publicity/card-publicity/card-publicity.component';
import { CategoriesBarComponent } from '../../../components/categories-bar/categories-bar.component';
import { BrandsCarouselComponent } from '../../../components/brands-carousel/brands-carousel.component';
import { BRANDS } from '../../../core/data/brands.data';

@Component({
  selector: 'app-home',
  imports: [
    SideBarComponent,
    TopBarComponent,
    AsyncPipe,
    ProductsCarouselComponent,
    CardPublicityComponent,
    CommonModule,
    CategoriesBarComponent,
    BrandsCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private productService = inject(ProductService);

  public selectedCategory$ = new BehaviorSubject<string | null>(null);
  onSelectCategory(cat: string | null) {
    this.selectedCategory$.next(cat);
  }

  private products$ = this.productService.list().pipe(shareReplay(1));

  categories$ = this.products$.pipe(
    map((list) => Array.from(new Set(list.map((p) => p.category?.name))).sort())
  );

  private selectedBrand$ = new BehaviorSubject<string | null>(null);
  onSelectBrand(slug: string | null) {
    this.selectedBrand$.next(slug);
  }

  brands = BRANDS;

  vm$ = combineLatest([
    this.products$,
    this.selectedCategory$,
    this.brands,
  ]).pipe(
    map(([data, sel, slug]) => ({
      data: sel ? data.filter((p) => p.category?.name === sel) : data,
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
