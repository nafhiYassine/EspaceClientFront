import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HelpCenterEmptyComponent } from './help-center-empty.component';

describe('HelpCenterEmptyComponent', () => {
  let component: HelpCenterEmptyComponent;
  let fixture: ComponentFixture<HelpCenterEmptyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCenterEmptyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
