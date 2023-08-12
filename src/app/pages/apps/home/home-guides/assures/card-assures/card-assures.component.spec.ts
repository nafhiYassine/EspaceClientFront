import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssuresComponent } from './card-assures.component';

describe('CardAssuresComponent', () => {
  let component: CardAssuresComponent;
  let fixture: ComponentFixture<CardAssuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAssuresComponent]
    });
    fixture = TestBed.createComponent(CardAssuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
