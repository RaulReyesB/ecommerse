import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCarouselComponent } from './brands-carousel.component';

describe('BrandsCarouselComponent', () => {
  let component: BrandsCarouselComponent;
  let fixture: ComponentFixture<BrandsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
