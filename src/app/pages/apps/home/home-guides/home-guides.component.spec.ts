import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeGuidesComponent } from './home-guides.component';

describe('HomeGuidesComponent', () => {
  let component: HomeGuidesComponent;
  let fixture: ComponentFixture<HomeGuidesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGuidesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
