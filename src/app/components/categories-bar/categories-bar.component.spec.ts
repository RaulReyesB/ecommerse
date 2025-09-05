import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBarComponent } from './categories-bar.component';

describe('CategoriesBarComponent', () => {
  let component: CategoriesBarComponent;
  let fixture: ComponentFixture<CategoriesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
