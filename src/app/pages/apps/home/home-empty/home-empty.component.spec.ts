import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeEmptyComponent } from './home-empty.component';

describe('HomeEmptyComponent', () => {
  let component: HomeEmptyComponent;
  let fixture: ComponentFixture<HomeEmptyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEmptyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
