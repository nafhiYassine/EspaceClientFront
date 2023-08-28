import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSendComponent } from './success-send.component';

describe('SuccessSendComponent', () => {
  let component: SuccessSendComponent;
  let fixture: ComponentFixture<SuccessSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessSendComponent]
    });
    fixture = TestBed.createComponent(SuccessSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
