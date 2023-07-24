import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeGuidesGuideComponent } from './home-guides-guide.component';

describe('HomeGuidesGuideComponent', () => {
  let component: HomeGuidesGuideComponent;
  let fixture: ComponentFixture<HomeGuidesGuideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGuidesGuideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGuidesGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
