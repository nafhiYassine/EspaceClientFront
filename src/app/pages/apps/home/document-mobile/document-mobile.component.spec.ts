import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMobileComponent } from './document-mobile.component';

describe('DocumentMobileComponent', () => {
  let component: DocumentMobileComponent;
  let fixture: ComponentFixture<DocumentMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentMobileComponent]
    });
    fixture = TestBed.createComponent(DocumentMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
