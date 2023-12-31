import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomePricingComponent } from './home-pricing.component';

describe('HomePricingComponent', () => {
  let component: HomePricingComponent;
  let fixture: ComponentFixture<HomePricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePricingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
