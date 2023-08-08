import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCardComponent } from './dropdown-card.component';

describe('DropdownCardComponent', () => {
  let component: DropdownCardComponent;
  let fixture: ComponentFixture<DropdownCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCardComponent]
    });
    fixture = TestBed.createComponent(DropdownCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
