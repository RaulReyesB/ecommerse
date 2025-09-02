import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicityComponent } from './card-publicity.component';

describe('CardPublicityComponent', () => {
  let component: CardPublicityComponent;
  let fixture: ComponentFixture<CardPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPublicityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
