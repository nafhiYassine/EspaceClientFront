import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerOverviewExampleComponent } from './progress-spinner-overview-example.component';

describe('ProgressSpinnerOverviewExampleComponent', () => {
  let component: ProgressSpinnerOverviewExampleComponent;
  let fixture: ComponentFixture<ProgressSpinnerOverviewExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerOverviewExampleComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
