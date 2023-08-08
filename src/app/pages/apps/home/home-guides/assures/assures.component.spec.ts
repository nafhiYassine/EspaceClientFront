import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuresComponent } from './assures.component';

describe('AssuresComponent', () => {
  let component: AssuresComponent;
  let fixture: ComponentFixture<AssuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssuresComponent]
    });
    fixture = TestBed.createComponent(AssuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
