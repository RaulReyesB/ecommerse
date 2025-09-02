import { Component,Input } from '@angular/core';
import { SideBarComponent } from '../../../components/side-bar/side-bar.component';
import { TopBarComponent } from '../../../components/top-bar/top-bar.component';
import { CarouselComponent } from '../../../components/carousel/carousel.component';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { Product } from '../../../core/interface/product/product.model';
@Component({
  selector: 'app-home',
  imports: [
    SideBarComponent,
    TopBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
}
