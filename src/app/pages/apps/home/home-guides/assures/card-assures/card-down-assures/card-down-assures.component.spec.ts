import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDownAssuresComponent } from './card-down-assures.component';

describe('CardDownAssuresComponent', () => {
  let component: CardDownAssuresComponent;
  let fixture: ComponentFixture<CardDownAssuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDownAssuresComponent]
    });
    fixture = TestBed.createComponent(CardDownAssuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
