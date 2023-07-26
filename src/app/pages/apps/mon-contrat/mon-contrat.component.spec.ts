import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonContratComponent } from './mon-contrat.component';

describe('MonContratComponent', () => {
  let component: MonContratComponent;
  let fixture: ComponentFixture<MonContratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonContratComponent]
    });
    fixture = TestBed.createComponent(MonContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
